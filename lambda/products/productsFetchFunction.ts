import { Resource } from "aws-cdk-lib";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
//import { Context } from "vm";

export async function handler(event: APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult> {
    
        const lambdaRequestId = context.awsRequestId
        const apiRequestId = event.requestContext.requestId

        console.log(`API Gateway RequestId: ${apiRequestId} - Lambda RequestId: ${lambdaRequestId}`)
        
        const method = event.httpMethod
        if(event.resource === "/products"){
            if(event.httpMethod === 'GET'){
                console.log('GET')

                return{
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "GET Products - OK"
                    })
                }
            }
        }

        return{
            statusCode: 400,
            body: JSON.stringify({
                message: "Bad Request"

            })
        }
    }