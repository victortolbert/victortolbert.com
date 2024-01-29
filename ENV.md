```ini
APP_NAME="Frontier"
BASE_URL="https://demo.test:5081"
VITE_API_URL="http://localhost:8000"

AUTHORIZE_NET_API_LOGIN_ID="8dzC8Xb48hf"
AUTHORIZE_NET_TRANSACTION_KEY="5s59CE9D9Jb4Cmwr"
AUTHORIZE_NET_PUBLIC_CLIENT_KEY="8nXVfbpEpDrKdgY37eULnXy4eACX5849XtNnvqk8L3aK4sE78PytKk3rnUaR685f"
AUTHORIZE_NET_ACCEPT_JS_URL="https://jstest.authorize.net/v1/Accept.js"
AUTHORIZE_NET_ACCEPT_UI_JS_URL="https://jstest.authorize.net/v3/AcceptUI.js"
AUTHORIZE_NET_KEY="SIMON"

# postgres://postgres:[YOUR-PASSWORD]@db.gwidqbhzwycwjizpctxs.supabase.co:6543/postgres
DB_URI="postgresql://postgres:E9#3kIhTGDwzUAnY@db.gwidqbhzwycwjizpctxs.supabase.co:5432/postgres"
DB_HOST="db.gwidqbhzwycwjizpctxs.supabase.co"
DB_DATABASE="postgres"
DB_PORT="5432"
DB_USER="postgres"
DB_PASSWORD="E9#3kIhTGDwzUAnY"

# https://github.com/settings/applications/2127936
GITHUB_APP_ID=2127936

# Supabase (Frontier)
# Used to decode your JWTs. You can also use this to mint your own JWTs.
SUPABASE_JWT_TOKEN="ucpMXTuyWY+0YwafkHj/3URMiHfK1ce+JL3kBwPBxFyWLCA6OHsIxy95V9USsXBECLjOquActTYgThOHHddrmA=="

# A RESTful endpoint for querying and managing your database.
SUPABASE_URL="https://gwidqbhzwycwjizpctxs.supabase.co"

# Your API is secured behind an API gateway which requires an API Key for every request.
# anon, public
# This key is safe to use in a browser if you have enabled Row Level Security for
# your tables and configured policies.
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aWRxYmh6d3ljd2ppenBjdHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2Nzc3MTUsImV4cCI6MTk5MjI1MzcxNX0.OuiKLaPkdIl_3lUH0610JPTbbDp2nv3N45t9bYi-NmU"

# This key has the ability to bypass Row Level Security. Never share it publicly.
SUPABASE_SERVICE_ROLE="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aWRxYmh6d3ljd2ppenBjdHhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjY3NzcxNSwiZXhwIjoxOTkyMjUzNzE1fQ.LxaHx_LoSNKDiyb1Xnik319SnMxSk9OySU_JKQxFraQ"

# T7DTN-6W4TW-6MNLM-HPCGE-7BD3S
# urvcywjduaokzqvp

MONGO_CONNECTION_STRING=mongodb+srv://dbUser:CpLOxFP5CVhgrlRS@cluster0.ymiwm.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=victortolbert

# mongodb+srv://dbUser:CpLOxFP5CVhgrlRS@cluster0.ymiwm.mongodb.net/

CURRENCY_API_KEY=cur_live_9wjJtsnviLcAuT3vZq6SrSVkz5gWvG7e4YaO7v7C

DB_CONNECTION_STRING="Server=sql-exemplar-dev-eastus.database.windows.net;Initial Catalog=ExemplarCore;Persist Security Info=False;User ID=ecdev-sqladmin;Password=3#0)0hpPFgKCWUr6)5nYbc2;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"

# PDF Compression
XACT_EXPORT_LIMIT="50"
SYMBILITY_EXPORT_LIMIT="30"
DELIVERABLE_ERROR_EMAIL="mhouser@hancockclaims.com"

# Eagle View
HANCOCK_EAGLE_VIEW_TRIGGER_EMAIL="eagleview@hancockclaims.com"
EAGLEVIEW_USER_ID="17538"
EAGLE_VIEW_SOURCE_ID="F02594BF-2A43-4AE1-AE51-4E9F83260EA0"
EAGLE_VIEW_CLIENT_SECRET="IQL86SKV4R992H3AEDBAA0MLJAM9SQ0JFEX96R61E7DRQV81T8QIGCJPG4JNDHDE"
EAGLE_VIEW_USER_NAME="HancockTest@eagleview.com"
EAGLE_VIEW_USER_PASSWORD="EagleView1"
EAGLE_VIEW_SEND_FAILD_NOTIFICATION_EMAIL="kreid@hancockclaims.com"
EAGLE_VIEW_PRIMARY_PRODUCT_ID="48"
EAGLE_VIEW_DELIVERY_PRODUCT_ID='\"8\\\",'
EAGLE_VIEW_BASE_URL="https://webservices-integrations01.eagleview.com"
EAGLE_VIEW_MEASUREMENT_INSTRUCTION_TYPE="3"
EAGLE_VIEW_FILE_TYPE="111"
EAGLE_VIEW_FILE_FORMAT="1"
EAGLE_VIEW_REQUESTS_LIMIT_RANGE="mm"

# Hover
HOVER_APP_LINK="https://hover.app.link/20191025Hancock-1-2019-10-25"
HOVER_DEFAULT_WALLET_ID="182500"
HOVER_REDIS_CACHE_KEY="user:hover"
HOVER_ADMIN_USER_ID="462148"
HOVER_ADMIN_EMAIL="mhouser@hancockclaims.com"
HOVER_BASE_API="https://sandbox.hover.to"
HOVER_ORG_ID="327" # Hancock
REDIS_CACHE_CONNECTION_STRING="hancock-dev.redis.cache.windows.net:6380password=acIVE6kfifyuXmxfEFKoh1rPLvZjlNgoIMTZM29O0ZM=,ssl=True,abortConnect=true"

# Hi Marley
HI_MARLEY_API_URL="https://integration.uat.marley.ai/api"
HI_MARLEY_API_USERNAME="x-api-key"
HI_MARLEY_API_PASSWORD="sM9usvLPx25cszuTgpOzTNdfYzCudDEv9CJYrRVB"

# Vip
VIP_API_URL="http://apistaging.vipbap.com/v1"
VIP_API_USERNAME="hancockapi@vipsoftware.com"
VIP_API_PASSWORD="N1+XD/u+0orRiZu7+eYl1Q=="
VIP_EMAIL_RECIPIENTS="aford@hancockclaims.com"

# Google Maps API
GOOGLE_DIRECTIONS_API_KEY="AIzaSyBqNvN-IjKV-S8ItAz9B8Dy5K1U-XCcJu8"
GOOGLE_DIRECTIONS_API_URL="https://maps.googleapis.com/maps/api/directions/json"
GOOGLE_TRAVEL_TIME_JSON_PATH="routes[0].legs[0].duration.value"

# Local
EXEMPLAR_API_URL="https://localhost:44311/api/"
EXEMPLAR_CORE_URL="https://localhost:44328/"
EXEMPLAR_LEGACY_URL="https://localhost:44327/"
HANCOCK_IDENTITY="https://app-identity-dev-eastus.azurewebsites.net/"
ASSET_FILE_SHARE="hancockdevassets"
XACTWARE_FILE_SHARE="xactware"
SERVICE_BUS="Endpoint=sb://sb-exemplardev.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=p2hOh+eAC1zh62lFYEkZ4BOkgcHxQOyKA4FzvA5NUVo="
STORAGE_ACCOUNT="DefaultEndpointsProtocol=https;AccountName=hansadev;AccountKey=tcUr7qGIpzvSVpvH2KrvISl7wxC0va/+6C2PRZAfLKaqZkzIkxCjugihd0PTWCBU46yRX1J9puwnaSMWleuo1w==;EndpointSuffix=core.windows.net"
IMG_TOKEN="?sv=2019-12-12&ss=btqf&srt=sco&st=2021-02-11T15%3A05%3A08Z&se=2023-02-12T15%3A05%3A00Z&sp=rl&sig=EdNXLIhNmrTUfHN3teMFqX%2Fy7K%2FRaP9RdPzEncdiutg%3D"
IMG_PATH="https://hansadev.file.core.windows.net/hancockdevassets/"
CAPTURE_FACET_IDS="true"

SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_ASSIGNED_USERNAME="technicianassignment@hancockclaims.com"
SMTP_ASSIGNED_PASSWORD="Duc12172"
SMTP_CLAIM_ACCEPTANCE_USER_NAME="claimacceptance@hancockclaims.com"
SMTP_CLAIM_ACCEPTANCE_PASSWORD="Vaz28085"
SMTP_CLAIMS_USER_NAME="donotreply@hancockclaims.com"
SMTP_CLAIMS_PASSWORD="d!Rp1gGH!fEqO4jd"
SMTP_CLAIMS_FROM_ADDRESS="claims@hancockclaims.com"
SMTP_DELIVERABLES_USER_NAME="deliverables@hancockclaims.com"
SMTP_DELIVERABLES_PASSWORD="Yaz98762&Qrp01#!"
SMTP_HANCOCK_DELIVERABLES_USER_NAME="hancockdeliverables@hancockclaims.com"
SMTP_HANCOCK_DELIVERABLES_PASSWORD="Zug43788"
SMTP_RESCHEDULED_USER_NAME="reschedulenotification@hancockclaims.com"
SMTP_RESCHEDULED_PASSWORD="Pul02896"
SMTP_SCHEDULED_USER_NAME="schedulenotification@hancockclaims.com"
SMTP_SCHEDULED_PASSWORD="Zuq78775"
```
