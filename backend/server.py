import json
from datetime import datetime, timezone, timedelta
from typing import Any, Dict, List, Optional, Tuple
from aiohttp import web, BasicAuth, ClientSession


routes = web.RouteTableDef()


def check_required_fields(data: Dict[str, Any]) -> Tuple[bool, Optional[str]]:
    required_fields = ('issue', 'activity', 'logged', 'user', 'token')
    for field in required_fields:
        if field not in data:
            return False, field
    return True, None

def get_time_spent_seconds(time: str):
    # 2h40m 2h 3m
    return seconds



@routes.post('/api/add-worklog')
async def get_current_sprint_issues(request: web.Request) -> web.Response:
    data = await request.json()
    res, field = check_required_fields(data)
    if res is False:
        return  web.json_response({'error': f'Missed value for required field: {field}'})

    jira_payload = {
        'comment': data['activity']
    }
    now = datetime.now(timezone(timedelta(hours=3))).isoformat()

    expected = {
        "comment": "support",
        "started": "2018-09-21T07:49:34.762+0300",
        "timeSpentSeconds": 60
    }
    return web.json_response({'result': 'ok'})


if __name__ == '__main__':   
    app = web.Application()
    app.add_routes(routes)
    web.run_app(app)
