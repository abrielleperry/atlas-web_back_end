#!/usr/bin/env python3



def list_all(mongo_collection):
    """function that lists all documents in a collection"""
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
