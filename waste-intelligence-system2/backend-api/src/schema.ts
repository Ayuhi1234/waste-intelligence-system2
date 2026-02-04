import { z } from 'zod';

// Validation Schema for Bin Telemetry
// The 'export' keyword here is CRITICAL so other files can use it!
export const BinTelemetrySchema = z.object({
  bin_id: z.string().min(1, "Bin ID is required"),
  fill_level: z.number().min(0).max(100, "Fill level must be 0-100%"),
  battery_level: z.number().min(0).max(100).optional(),
  last_serviced: z.string().datetime().optional(),
  status: z.enum(['active', 'maintenance', 'offline'])
});

// Export the type automatically
export type BinTelemetry = z.infer<typeof BinTelemetrySchema>;