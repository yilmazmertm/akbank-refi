from web3 import Web3
from web3.middleware import geth_poa_middleware
import time


def connect_w3_instance(provider_url):
    i = 0
    while i < 30:
        try:
            w3 = Web3(Web3.HTTPProvider(provider_url))
            w3.middleware_onion.inject(geth_poa_middleware, layer=0)
            if w3.isConnected():
                return w3
            else:
                time.sleep(1)
        except Exception:
            time.sleep(1)
            pass
        i = i + 1
    return False
