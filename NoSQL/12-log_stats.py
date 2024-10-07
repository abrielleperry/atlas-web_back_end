#!/usr/bin/env python3
import pymango


def log_stats():
    client = MongoClient()
    db = client.logs
    collection = db.nginx
    total_logs = collection.count_documents({})
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
    status_check_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )


if __name__ == "__main__":
    log_stats()
