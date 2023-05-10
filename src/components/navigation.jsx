import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    {
      allShopifyProduct {
        productTypes: distinct(field: { productType: SELECT })
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="All"
        className={navLink}
        to="/toys/"
        activeClassName={activeLink}
      >
        All products
      </Link>
      {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/toys/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
