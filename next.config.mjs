import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.gms/,
            use: 'raw-loader'
        })

        return config
    },

    compiler: {
        styledComponents: true
    },
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    redirects: () => (
        // Configure `pageExtensions` to include markdown and MDX files
        // Basic redirect
        [{
            source: '/',
            destination: '/online',
            permanent: true,
        }]
    )
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

