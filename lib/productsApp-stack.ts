import * as lambda from "aws-cdk-lib/aws-lambda"

import * as lambdNodeJS from "aws-cdk-lib/aws-lambda-nodejs"

import * as cdk from "aws-cdk-lib"

import { Construct } from "constructs"

export class ProductAppStack extends cdk.Stack{
    readonly productsFetchHandler: lambdNodeJS.NodejsFunction

    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props)

        this.productsFetchHandler = new lambdNodeJS.NodejsFunction(this, 
            "ProductsFetchFunction",{
            functionName: "ProductsFetchFunction",
            entry: "lambda/products/productsFetchFunction.ts",
            handler: "handler",
            memorySize: 128,
            timeout:cdk.Duration.seconds(5),
            bundling: {
                minify:true,
                sourceMap: false
            },
        })
    }
}