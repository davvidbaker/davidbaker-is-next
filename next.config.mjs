/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    redirects: () => (
        // Basic redirect
        [{
            source: '/',
            destination: '/online',
            permanent: true,
        }]
    )
};

export default nextConfig;
