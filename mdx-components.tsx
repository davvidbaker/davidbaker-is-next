import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        img: (props) => (
            <Image
                sizes="100vw"
                // @ts-ignore
                width={300}
                // @ts-ignore
                height={100}
                style={{ width: '100%', height: 'auto', maxWidth: "80vw" }}
                {...props}
            />
        ),
        ...components,
    }
}