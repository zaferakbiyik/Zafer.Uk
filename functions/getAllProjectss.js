import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjectss = async () => {
  const getAllProjectssQuery = gql`
    {
      blogs {
        id
        title
        description
        image {
          url
        }
        source
        tags
      }
    }
  `;

  const { blogs } = await graphcms.request(getAllProjectssQuery);

  return blogs;
};
