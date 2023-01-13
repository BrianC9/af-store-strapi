
# **AF** Store

Sneakers ecommerce inspired in the Nike **A**ir **F**orce sneaker collection

The Backend of this project has been made with Strapi, a headless CMS; and the Frontend with Remix
## Deployment

 [***You can go visit by clicking here !👈👈***](https://af-store-remix.vercel.app/)


## API Reference
The endspoints I mainly used for this application are the following:

### Sneakers Endpoint

#### Get all sneakers

```http
  GET /api/sneakers?populate=image
```

#### Get one sneaker

```http
  GET /api/sneakers/${slug}?populate=image
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. Id of item to fetch |

#### Get sneakers on sale

```http
  GET /api/sneakers/?filters[onSale]=true&populate=image
```

### Posts Endpoint

#### Get all posts

```http
  GET /api/posts?populate=image
```

#### Get one sneaker

```http
  GET /api/posts/${slug}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. Id of item to fetch |

#### Get the latest two posts

```http
  GET /api/posts?sort=createdAt:DESC&pagination[limit]=2&populate=image
```



## 🛠 Tech Stack

**Client:** React, Remix, Vanilla CSS

**Server:** Remix, Strapi, Node

**Deployment:** Vercel and Cloudinary for the images

## 🖥 Fronent respository
You can visit the Strapi backend repository by clicking at the following link:

[***AFStore Remix repository***](https://github.com/BrianC9/af-store-remix)


## ✍ Contact details
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bryan-cusme/)


### 👩‍⚖️ Legal disclaimer
All trademarks, logos and images are the **property of their respective owners**. 
All company, product and service names used in this website are for **learning and educational purposes only**. 
Use of these names,trademarks and brands **does not imply endorsement**.
