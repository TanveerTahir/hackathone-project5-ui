import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'jtftkdc0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skM6EnDiF3FZBdmMjbvoYZzdr1KEVjQa19NXT49hj8jkvCZmjT8zxBK17TgWULm8yteEVfoYE38YOOoDJObeMesfe1rzmVbvfYsAev7GTGACikq9FmZlfmODxjH36w2TBhfeUf7mZ28ELuKMivvKDy6I7gmN1zXkC93iccGfn7KGNlzJKOJy',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await Delete('https://template6-six.vercel.app/api/products');
    method:Post
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);



    let dataFetched = false;

async function fetchData() {
    if (!dataFetched) {
        const response = await fetch('https://template6-six.vercel.app/api/products');
        const data = await response.json();
        // Process your data
        dataFetched = true;
    }
}

fetchData();

  }
}

importProducts();