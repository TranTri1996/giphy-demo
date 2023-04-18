import React, { useState, createContext } from "react";

const TrendingGifContext = createContext([]);

const mockGif = {
  type: "gif",
  id: "zbzdiXxWcLazap6Klk",
  url: "https://giphy.com/gifs/happy-birthday-cake-bday-zbzdiXxWcLazap6Klk",
  slug: "happy-birthday-cake-bday-zbzdiXxWcLazap6Klk",
  bitly_gif_url: "https://gph.is/g/ZYeBkJn",
  bitly_url: "https://gph.is/g/ZYeBkJn",
  embed_url: "https://giphy.com/embed/zbzdiXxWcLazap6Klk",
  username: "dinosally",
  source: "",
  title: "Feliz Cumple Happy Birthday GIF by DINOSALLY",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2022-02-04 05:57:45",
  trending_datetime: "0000-00-00 00:00:00",
  images: {
    original: {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.gif&ct=g",
      mp4_size: "64352",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.mp4&ct=g",
      webp_size: "75434",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.webp&ct=g",
      frames: "57",
      hash: "4e59e2113a74112e8d26bae2bebbe610",
    },
    downsized: {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.gif&ct=g",
    },
    downsized_large: {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.gif&ct=g",
    },
    downsized_medium: {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.gif&ct=g",
    },
    downsized_small: {
      height: "480",
      width: "480",
      mp4_size: "64352",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy-downsized-small.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy-downsized-small.mp4&ct=g",
    },
    downsized_still: {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy_s.gif&ct=g",
    },
    fixed_height: {
      height: "200",
      width: "200",
      size: "30727",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200.gif&ct=g",
      mp4_size: "23953",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200.mp4&ct=g",
      webp_size: "33636",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200.webp&ct=g",
    },
    fixed_height_downsampled: {
      height: "200",
      width: "200",
      size: "7863",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200_d.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200_d.gif&ct=g",
      webp_size: "8834",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200_d.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200_d.webp&ct=g",
    },
    fixed_height_small: {
      height: "100",
      width: "100",
      size: "15192",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100.gif&ct=g",
      mp4_size: "12299",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100.mp4&ct=g",
      webp_size: "16682",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100.webp&ct=g",
    },
    fixed_height_small_still: {
      height: "100",
      width: "100",
      size: "2233",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100_s.gif&ct=g",
    },
    fixed_height_still: {
      height: "200",
      width: "200",
      size: "4319",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200_s.gif&ct=g",
    },
    fixed_width: {
      height: "200",
      width: "200",
      size: "30727",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w.gif&ct=g",
      mp4_size: "23953",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w.mp4&ct=g",
      webp_size: "33636",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w.webp&ct=g",
    },
    fixed_width_downsampled: {
      height: "200",
      width: "200",
      size: "7863",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w_d.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w_d.gif&ct=g",
      webp_size: "8834",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w_d.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w_d.webp&ct=g",
    },
    fixed_width_small: {
      height: "100",
      width: "100",
      size: "15192",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100w.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100w.gif&ct=g",
      mp4_size: "12299",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100w.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100w.mp4&ct=g",
      webp_size: "16682",
      webp: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100w.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100w.webp&ct=g",
    },
    fixed_width_small_still: {
      height: "100",
      width: "100",
      size: "2233",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/100w_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=100w_s.gif&ct=g",
    },
    fixed_width_still: {
      height: "200",
      width: "200",
      size: "4319",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/200w_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=200w_s.gif&ct=g",
    },
    looping: {
      mp4_size: "330567",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy-loop.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy-loop.mp4&ct=g",
    },
    original_still: {
      height: "480",
      width: "480",
      size: "11113",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy_s.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy_s.gif&ct=g",
    },
    original_mp4: {
      height: "480",
      width: "480",
      mp4_size: "64352",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy.mp4&ct=g",
    },
    preview: {
      height: "480",
      width: "480",
      mp4_size: "29791",
      mp4: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy-preview.mp4?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy-preview.mp4&ct=g",
    },
    preview_gif: {
      height: "480",
      width: "480",
      size: "24731",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy-preview.gif?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy-preview.gif&ct=g",
    },
    preview_webp: {
      height: "480",
      width: "480",
      size: "19036",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/giphy-preview.webp?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=giphy-preview.webp&ct=g",
    },
    "480w_still": {
      height: "480",
      width: "480",
      size: "60452",
      url: "https://media3.giphy.com/media/zbzdiXxWcLazap6Klk/480w_s.jpg?cid=f590a90d2slsnqvy6joq0r6hz0mdpgohkux50lui0dp0yhso&rid=480w_s.jpg&ct=g",
    },
  },
  user: {
    avatar_url:
      "https://media2.giphy.com/avatars/mostapesstudio/AfdnP317Swop.png",
    banner_image:
      "https://media2.giphy.com/headers/mostapesstudio/Fa2uO8Uw5lPf.png",
    banner_url:
      "https://media2.giphy.com/headers/mostapesstudio/Fa2uO8Uw5lPf.png",
    profile_url: "https://giphy.com/dinosally/",
    username: "dinosally",
    display_name: "DINOSALLY",
    description:
      "Stomp into adventure with Sally, the pink young dinosaur, and her beastie besties Blambi and Tibo!",
    instagram_url: "https://instagram.com/mostapestudio",
    website_url: "http://mostapes.com/dinosally",
    is_verified: true,
  },
  analytics_response_payload:
    "e=Z2lmX2lkPXpiemRpWHhXY0xhemFwNktsayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWY1OTBhOTBkMnNsc25xdnk2am9xMHI2aHowbWRwZ29oa3V4NTBsdWkwZHAweWhzbyZjdD1n",
  analytics: {
    onload: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpiemRpWHhXY0xhemFwNktsayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWY1OTBhOTBkMnNsc25xdnk2am9xMHI2aHowbWRwZ29oa3V4NTBsdWkwZHAweWhzbyZjdD1n&action_type=SEEN",
    },
    onclick: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpiemRpWHhXY0xhemFwNktsayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWY1OTBhOTBkMnNsc25xdnk2am9xMHI2aHowbWRwZ29oa3V4NTBsdWkwZHAweWhzbyZjdD1n&action_type=CLICK",
    },
    onsent: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpiemRpWHhXY0xhemFwNktsayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWY1OTBhOTBkMnNsc25xdnk2am9xMHI2aHowbWRwZ29oa3V4NTBsdWkwZHAweWhzbyZjdD1n&action_type=SENT",
    },
  },
};

const TrendingGifProvider = ({ children }) => {
  const contextValue = {
    trendingGifs: useState([mockGif]),
    defaultFetchLimit: 2,
    defaultFetchOffset: 0,
    defaultGifSearched: "birthday",
  };

  return (
    <TrendingGifContext.Provider value={contextValue}>
      {children}
    </TrendingGifContext.Provider>
  );
};

export { TrendingGifContext, TrendingGifProvider };
