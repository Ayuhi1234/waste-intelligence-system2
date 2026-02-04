# Sample Code Review

**Context:** The intern submitted a Pull Request where they are querying the database inside a `for` loop to get bin details.

**My Review Comment:**
"Hey! Great job getting this feature working. The UI looks spot on. 🎨

I noticed a potential performance bottleneck in `BinService.ts`. Currently, we are querying the database inside the loop:
```typescript
bins.forEach(bin => {
  const details = await db.getDetails(bin.id); // ⚠️ Triggers 1 query per bin (N+1 Problem)
});