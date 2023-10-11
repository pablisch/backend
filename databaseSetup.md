Create DB if it does not already exist (choose any name you like or use the generic name):
```bash
createdb generic
```
Add tables and seeds
```bash
psql -h 127.0.0.1 generic < tablesAndSeeds.sql
```