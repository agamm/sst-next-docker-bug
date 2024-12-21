/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: "mydemo-v2",
			removal: input?.stage.includes("prod") ? "retain" : "remove",
			home: "aws",
			providers: {
				aws: {
					profile: "agam-development", 
					region: "us-east-1",
				},
			},
		};
	},
	async run() {
		const currentStage = $app.stage;
		console.log("[i] CURRENT STAGE", currentStage);

		const vpc = new sst.aws.Vpc("MyVpc", { bastion: true });
		const cluster = new sst.aws.Cluster("MyCluster", { vpc });

		cluster.addService("MyNextService", {
			image: {
				dockerfile: "./Dockerfile",
			},
			loadBalancer: {
				ports: [{ listen: "80/http", forward: "3000/http" }],
			},
			dev: {
				command: "cd ./app && npm run dev",
			},
		});
	},
});
