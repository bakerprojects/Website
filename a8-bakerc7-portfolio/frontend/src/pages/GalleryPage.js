import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

function GalleryPage() {
    const images = [
        
    {
      original: 'images/ancient-egypt-museum.jpg',
      thumbnail: 'images/ancient-egypt-museum.jpg',
      description: `Busts of high-status individuals from the Ptolemaic period of ancient Egypt at the Metropolitan Museum of Art.`,
      originalHeight: '450px',
    },
      {
      original: 'images/zoo-desert-cat.jpg',
      thumbnail: 'images/zoo-desert-cat.jpg',
      description: `This sand cat is located at the Smithsonian National Zoo in Washington DC. Sand cats are small cats that inhabit sandy and stony
      deserts and live away from water sources. They are typically no longer than twenty inches in length.`,
      originalHeight: '450px',
    },
      {
      original: 'images/asian-grocery-store.jpg',
      thumbnail: 'images/asian-grocery-store.jpg',
      description: `Shelf of goods at an Asian grocery store located in Brooklyn, New York. Many of these items are difficult to find in the United States
      and this store allows for a unique opportunity to experience food of other cultures.`,
      originalHeight: '450px',
    },
      {
      original: 'images/japan-village-shops.jpg',
      thumbnail: 'images/japan-village-shops.jpg',
      description: `This shopping center is located in Brooklyn, New York. It's a series of buildings, each with multiple floors. Here you can experience
      unique cultural shopping. Many of the decorations and goods you will not find elsewhere in the United States.`,
      originalHeight: '450px',
    },
      {
      original: 'images/japanese-garden.jpg',
      thumbnail: 'images/japanese-garden.jpg',
      description: `This is the Japanese Garden at Lewis Ginter Botanical Garden in Richmond, Virginia.
      Here you can walk through a replica of the decorative gardens of historical Japan. There is also
      a Japanese Tea House onsite.`,
      originalHeight: '450px',
    },
      {
      original: 'images/capital-trail-biking.jpg',
      thumbnail: 'images/capital-trail-biking.jpg',
      description: `An image of the Capital Trail in Richmond, Virginia. This trail is about 52 miles long and stretches from Richmond to
      Williamsburg, Virginia. It is completely separate from road traffic and is very popular amongst walkers, runners, and bikers.`,
      originalHeight: '450px',
    },
      {
      original: 'images/road-bike.jpg',
      thumbnail: 'images/road-bike.jpg',
      description: `This bicycle features a full carbon frame and high-end Shimano Ultegra components. It's an excellent choice
      for long distance rides and features an endurance style frame.`,
      originalHeight: '450px',
    },
      {
      original: 'images/cliff-dwellings-colorado.jpg',
      thumbnail: 'images/cliff-dwellings-colorado.jpg',
      description: `These Cliff Dwellings were originally located in McElmo Canyon, but in 1907 they were relocated to their present location
      to protect the dwellings from looters and vandalism. It also allowed for the buildings to be reconstructed in such a way that tourists
      can explore the structures without harming them.`,
      originalHeight: '450px',
    },
      {
      original: 'images/fall-leaves-hiking.jpg',
      thumbnail: 'images/fall-leaves-hiking.jpg',
      description: `This hiking trail is called Madison Run Road and is located near Grottoes, Virginia. It's an easy trail that also
      serves as a fire road. Hiking in the fall, you can experience many of the fall colors on the variety of trees located in and 
      around Shenandoah National Park.`,
      originalHeight: '450px',
    },
      {
      original: 'images/watch-movement.jpg',
      thumbnail: 'images/watch-movement.jpg',
      description: `This Soviet era watch movement was believed to be the same type worn by Yuri Gagarin on the first manned trip to
      outer space. Many watches with these movements were produced and can be found inexpensively.`,
      originalHeight: '450px',
    },
    ]

    return (
        <>

    <h2>Gallery</h2>
        <article>
        <ImageGallery items={images} />
        </article>
        </>
    );
}
export default GalleryPage;