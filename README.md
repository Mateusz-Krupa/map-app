This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Unit Tests 
To run the unit tests: 
```bash
npm run test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploying to a Cloud Provider

This app can be deployed to any cloud provider that supports Kubernetes using the `kubectl apply -f .k8n/` command. 

To deploy the app, navigate to the `.k8n/` directory and run the following command:

Please note that in order to deploy the app successfully, you may need to build the Docker image and update the `deployment.yaml` file with the correct image information. Currently, the `deployment.yaml` file uses a private repository for the Docker image.

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t myregistry/myimage:tag --push .
```

This will push the Docker image to the registry specified in the image name.

For more information on building multi-architecture Docker images, see the Docker documentation: [Build and push multi-architecture images](https://docs.docker.com/desktop/multi-arch/).
