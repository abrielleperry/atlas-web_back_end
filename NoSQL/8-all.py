#!/usr/bin/env python3



def list_all(mongo_collection):
    """function that lists all documents in a collection"""
    return list(mongo_collection.find()) if mongo_collection else []
