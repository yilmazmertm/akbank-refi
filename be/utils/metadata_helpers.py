import json
from datetime import datetime
import hashlib


def create_a_hash(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def create_metadata_return_hash(produced_product):
    now = datetime.now()

    x = {
        "code": produced_product.code,
        "name": produced_product.name,
        "amount": produced_product.amount,
        "created_at": str(produced_product.created_at),
        "timestamp": datetime.timestamp(now)
    }

    json_object_of_repr = json.dumps(x)
    return create_a_hash(json_object_of_repr)
