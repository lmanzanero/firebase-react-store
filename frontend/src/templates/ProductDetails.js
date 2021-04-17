import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'

export default function ProductDetails({ data }) {  
  const product = data.allRestApiApiProducts.edges[0].node; 
  return (
    <Layout> 
      <div className="grid grid-cols-2 gap-4 m-8">
          <div class="flex-none relative">
            <img src={product.image.high} alt="" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Product Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Margot Foster
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Price
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                       $120,000
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      In Stock
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      20
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Waranty
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      6 months
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex space-x-3 mb-4 text-sm font-semibold">
                      <div className="flex-auto flex space-x-3">
                        <Link to={`/cart`} state={{ productId: product.endpointId }} className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</Link>
                        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
                      </div>
                      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
                        <svg width="20" height="20" fill="currentColor">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </button>
                      <div class="rounded-full bg-yellow-100 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                        <dt className="text-amber-500">
                          <span className="sr-only">Rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>5</dd>
                      </div>
                    </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
    </Layout>
  )
}

export const query = graphql`
 query($slug: String!) {
    allRestApiApiProducts(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          name
          category
          date
          description
          id
          price
          slug
          image {
            high
          }
          endpointId
        }
      }
    }
  }
`
