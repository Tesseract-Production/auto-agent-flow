# EXTERNAL CONNECTION INFO FOR VARIOUS SERVICES THAT WE WILL BE LINKING AND WORKING WITH

## Webhook for top hero email capture button click action

When user sends their first name and  email , we need to add two more actions. First we need to trigger an email send from Kit platform. Second we need to add the webhook that is below so that it send a POST request to this route on click.

POST
URL: <https://api.tesseract.nexus/v1/auto-agent-flow-new-lead-processor>

Headers:
Authorization: 36429048-8653-444a-90d3-49ce15500f4a