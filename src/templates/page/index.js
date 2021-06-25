import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./style.scss"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { H1, H2, P } from '../../components/page-elements'

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  li {
    line-height: 1;
    margin-top: 10px;
  }
`


const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        desc

          banner {
            sharp: childImageSharp {
              fluid(
                  maxWidth: 450

              ) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
      body
      tableOfContents
    }
  }
`

const PageTemplate = ({ data }) => {
  // console.log("PageTemplate -> data", data)
  const { body, frontmatter, tableOfContents } = data.mdx;
  // const {mdx} = data;
  // const {frontmatter} = mdx;
  let imgURLForMeta;
  try {
    imgURLForMeta = frontmatter.banner.sharp.fluid.srcSet.split(',').slice(-2, -1)[0].split(' ')[0].trim();
  }
  catch(err) {
    imgURLForMeta = ''
  }
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.desc} cardImg={imgURLForMeta} />
      <div className="page-wrapper">
        <h1>{frontmatter.title}</h1>
        <div className='banner'>
          <Image className="new-post-cover" fluid={frontmatter.banner.sharp.fluid} />
        </div>
        {/* <Link to={post.slug}> {post.title}</Link> */}
        <aside>
        {typeof tableOfContents.items === 'undefined' ? null : (
          <Toc>
            <InnerScroll>
              <H2>Table of contents</H2>

              {tableOfContents.items.map(i => (
                <li key={i.url}>
                  <a href={i.url} key={i.url}>
                    {i.title}
                  </a>
                </li>
              ))}
            </InnerScroll>
          </Toc>
        )}
        </aside>
        <article className="single-article" >
        <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export default PageTemplate
