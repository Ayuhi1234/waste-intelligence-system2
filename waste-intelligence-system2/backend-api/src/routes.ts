import { Router, Request, Response } from 'express';
import { BinTelemetrySchema } from './schema';
import { z } from 'zod';

const router = Router();

// MOCK DATABASE (In a real app, this would be PostgreSQL)
const mockBins = [
  { id: 'bin_01', location: 'Sector 62', fill_level: 85, status: 'active' },
  { id: 'bin_02', location: 'Cyber Hub', fill_level: 20, status: 'active' },
  { id: 'bin_03', location: 'Manesar', fill_level: 0, status: 'maintenance' }
];

// 1. GET /bins - List all bins
router.get('/bins', (req: Request, res: Response) => {
  res.json({ success: true, data: mockBins });
});

// 2. GET /bins/:id - Get specific bin details [cite: 41]
router.get('/bins/:id', (req: Request, res: Response) => {
  const bin = mockBins.find(b => b.id === req.params.id);
  if (!bin) {
    return res.status(404).json({ success: false, error: "Bin not found" });
  }
  res.json({ success: true, data: bin });
});

// 3. POST /bins/:id/telemetry - Ingest Sensor Data (With Validation)
router.post('/bins/:id/telemetry', (req: Request, res: Response) => {
  try {
    // Validate input using Zod 
    // If the data is bad, this line throws an error immediately.
    const validData = BinTelemetrySchema.parse({ 
      bin_id: req.params.id, 
      ...req.body 
    });

    console.log(`[IoT Ingest] Received update for ${req.params.id}:`, validData);
    
    res.json({ success: true, message: "Telemetry accepted", data: validData });

  } catch (error) {
    // Handle Validation Errors Gracefully [cite: 46]
    if (error instanceof z.ZodError) {
      // Use .issues instead of .errors
return res.status(400).json({ success: false, errors: error.issues });
    }
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// 4. GET /metrics/summary - Operational Insights [cite: 42]
router.get('/metrics/summary', (req: Request, res: Response) => {
  const critical = mockBins.filter(b => b.fill_level > 80).length;
  const offline = mockBins.filter(b => b.status === 'offline').length;

  res.json({
    success: true,
    data: {
      total_bins: mockBins.length,
      critical_pickups_needed: critical,
      system_health: offline > 0 ? "Warning" : "Healthy"
    }
  });
});

export default router;