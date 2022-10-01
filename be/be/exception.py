from rest_framework.response import Response
from rest_framework.views import exception_handler

from be.responses import ERROR_MESSAGES


def is_request_valid(data_dict, key_values):
    if all(key in data_dict for key in key_values):
        return True
    else:
        return False


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response:
        if len(response.data) == 1:
            response_text = next(iter(response.data.values()))
            if isinstance(response_text, list):
                return_text = response_text[0]
            else:
                return_text = response_text

            if response_text == "Authentication credentials were not provided.":
                return_text = "Authentication credentials were invalid."

            if str(return_text).isdigit():
                return_text = int(return_text)
                return Response({
                    "error": True,
                    "errorMsg": ERROR_MESSAGES[return_text],
                    "errorCode": return_text,
                    "data": None,
                }, response.status_code)
            return Response({
                "error": True,
                "errorMsg": return_text,
                "errorCode": response.status_code,
                "data": None,
            }, response.status_code)
        else:
            return Response({
                "error": True,
                "errorMsg": response.data,
                "errorCode": -1,
                "data": None
            }, response.status_code)
    else:
        return response
