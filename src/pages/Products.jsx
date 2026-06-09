import { useState, useEffect } from "react";
import "./Products.css";
import QuoteModal from "../components/QuoteModal";

// ─── Google Drive Image URLs ───────────────────────────────────────────────────
const IMG = {
  // Category card images
  hygiene:           "https://drive.google.com/uc?export=view&id=1nytF3EBLEvPpRnq4yY5P2kGbpC_L6wG7",
  baby:              "https://drive.google.com/uc?export=view&id=1_i8j3fqzgMhJHQLyVnTxzUbnpf4qiwC6",
  adultincontinence: "https://drive.google.com/uc?export=view&id=1efyYcvveRwKexJOXTC-eXkSAutCdOWle",
  surgical:          "https://drive.google.com/uc?export=view&id=1alQci1JjbW6ilNKOfwzTHVEmuDnZUB9i",
  woundcare:         "https://drive.google.com/uc?export=view&id=1gjQEijRTnciZ9x-sjOoN2CvqVIPEe2Pv",
  orthopedic:        "https://drive.google.com/uc?export=view&id=1Bz9hApr8Ih1YaVn0t1Tv3Q0DUZ0hT-r9",
  orthopaedicbraces: "https://drive.google.com/uc?export=view&id=1V2WuDzDZPUEgHa8gdT4y0Gkj5PXjnegW",
  fractureaids:      "https://drive.google.com/uc?export=view&id=1it1l47Nq5hQNsqj-0Vzfqbh8xg9ljtMj",
  walkingaids:       "https://drive.google.com/uc?export=view&id=1vHkLaAiTsIfDugKqV2Am42AC-MvLnfAJ",
  sportgear:         "https://drive.google.com/uc?export=view&id=11VCoOs_4rjD6QI93Osk_V-2PRnOp834x",
  surgicaldressing:  "https://drive.google.com/uc?export=view&id=1kJQGK_ggFG9k-MAV5_fBzERQcIGpOPxC",
  physiotherapy:     "https://drive.google.com/uc?export=view&id=1NHbi0XkIJS-aQxqg5N0RQQMa9IGxKOU9",
  last:              "https://drive.google.com/uc?export=view&id=1fToYXGvyajert5WgKd7wS95twcOLJRA_",
  thighcalf:         "https://drive.google.com/uc?export=view&id=1Cekd5NePyl6trpzkepLVW1lqfvXQJLyz",
  wrist:             "https://drive.google.com/uc?export=view&id=1T6NKT7s2qILkcPK-xtz3EObXqv1cFWXi",
  fingersplints:     "https://drive.google.com/uc?export=view&id=11Kj7UAwctbhzuDGSX3OpvakjMVTBH4NA",
};

// ─── Local image map ───────────────────────────────────────────────────────────
const LOCAL_IMAGE_MAP = {
  "Feminine Hygiene Care": {
    cardImage: IMG.hygiene,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1RpsnSDVrAN1G2S62vruyhqwRSAqi2Tt3",
      "https://drive.google.com/uc?export=view&id=1Lydiu8H2sHNMFRyV9O9XNXASfMpExx3Z",
      "https://drive.google.com/uc?export=view&id=1UryLvmeLbZVOrZujBjVZkx_JtERCtDmC",
      "https://drive.google.com/uc?export=view&id=1wxS7rj546YgOMxNTEwq7VicDzewYWCIS",
      "https://drive.google.com/uc?export=view&id=1BDYLzGt-MGMZvjGvUdni94cT-YIBHgmN",
      "https://drive.google.com/uc?export=view&id=15vEeAWrZzidUe3sIweIvnKMJBHh5Rcmx",
      "https://drive.google.com/uc?export=view&id=1tfUDNW2VzDaXImRTEXiWik5XBSc_J0pj",
    ],
  },
  "Baby Care": {
    cardImage: IMG.baby,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1kvDocgiTA_M0XUowgmOEAxDcS_ZIWnGc",
      "https://drive.google.com/uc?export=view&id=1_IHNk1v0MoeQ9PVkX-L-gh_Z8mZdRp2Q",
      "https://drive.google.com/uc?export=view&id=1cVDNaPbGhblMQoCA0PYdTuGDPAqikcF3",
    ],
  },
  "Adult Incontinence": {
    cardImage: IMG.adultincontinence,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1eBl1y4ezGOzxmvJjyPf7hK0EqMIYBMjZ",
      "https://drive.google.com/uc?export=view&id=1LRJxfLcyu3Q7xXyEqSbLcU1HJpyTMjCB",
      "https://drive.google.com/uc?export=view&id=1U29c-obDUIVTRmm9Zv_sdab48n3vRvob",
      "https://drive.google.com/uc?export=view&id=18zSJd4fHRGeB3OyEXcxEaH2QQGwySx8V",
      "https://drive.google.com/uc?export=view&id=1_-JWakvMCrC5VeFxK5nHn5mhDmWDPtjf",
    ],
  },
  "Medical Disposables / Surgical": {
    cardImage: IMG.surgical,
    subImages: [
      "https://drive.google.com/uc?export=view&id=18t8OhN1JoIUU9N7mS1wx0a2o9HOQIq8o",
      "https://drive.google.com/uc?export=view&id=1tcO1KIR_TZrnKxI-BY4A6bjCBttsSkID",
      "https://drive.google.com/uc?export=view&id=1uIdCkHAfYK7NyM9PuXkb2XLSbNgdOzzI",
      "https://drive.google.com/uc?export=view&id=1sxFF2oQABgC55p2ggJEYM6H5WvIXzhR2",
      "https://drive.google.com/uc?export=view&id=1raqJpAGdzqqqKrs1r0KhUTJ9lUCc5dcY",
      "https://drive.google.com/uc?export=view&id=1enM8e8kyB0gv8Kzn1ll1R-woa9-DIdN8",
      "https://drive.google.com/uc?export=view&id=1Qq4Sl-5N4j_RnRySBR7pYzWttpL-7RGW",
      "https://drive.google.com/uc?export=view&id=1tSdYbIBQXMjLha5vfGjd_bEwSBaXFwoh",
      "https://drive.google.com/uc?export=view&id=1oM2KwzUNgRuaFmAbUCLyudybM3YDKA7d",
    ],
  },
  "Wound Care & Cotton": {
    cardImage: IMG.woundcare,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1_F6duupGD6qYHuVL4kMbG-I30eFvFOB8",
      "https://drive.google.com/uc?export=view&id=1FZpwhhmAbkm8Da5wkMGtj7Fvm8eLolWI",
      "https://drive.google.com/uc?export=view&id=1qrkFoZFbVEdF1AQPYGcYTSLK7MEmIEoU",
      "https://drive.google.com/uc?export=view&id=1kOfFY22k3BdGzPEcxSlPVJz5mhzpEGME",
      "https://drive.google.com/uc?export=view&id=1blAQ2NI_vH0CA1KZmNEQcpTvyP6Q2uuA",
      "https://drive.google.com/uc?export=view&id=10SpF1LdgflX7t8HHKsSrgyJjVA3uikPk",
      "https://drive.google.com/uc?export=view&id=1yddiu3qvahdJJ0KVb7w6HrKzuxOfrMcV",
      "https://drive.google.com/uc?export=view&id=1QPL3mSO-F4pg6CTyhsFstck0f7A_RWrO",
      "https://drive.google.com/uc?export=view&id=1Uv45VTkr1czHSFZMOz867ppTa6HJnBQ5",
      "https://drive.google.com/uc?export=view&id=1Sabv6ZGaFuPydy-z9OafaEVN662lLDxw",
      "https://drive.google.com/uc?export=view&id=1K_IswK1vOjQbFcSBY5_oAORDAlgYV9Xg",
    ],
  },
  "Orthopaedic Supports & Braces": {
    cardImage: IMG.orthopaedicbraces,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1knuKlI5T1w4CQVJWMv01iJhecroatIEe",
      "https://drive.google.com/uc?export=view&id=1reCkonkR7TAysVKCfrTt79a9tYfHcUCh",
      "https://drive.google.com/uc?export=view&id=1T0-a3ADVvnELeyV1MuwAIpqRXeqyDUr8",
      "https://drive.google.com/uc?export=view&id=1whif5yqBNcHDJxg150pM6tZ_uPyIQnJ4",
      "https://drive.google.com/uc?export=view&id=1caYs7rZpEfPmFjzfxgWa9iLe-ALJ-oTb",
      "https://drive.google.com/uc?export=view&id=1yq2LatT63f5aurvYOhhXHxeQhRZGs6fy",
      "https://drive.google.com/uc?export=view&id=1mBdqojSrJfvUEnvl4M4JgrhFmcv2a7Gj",
      "https://drive.google.com/uc?export=view&id=1zVK6uXgHkWSjhL139VHNUDPa6yRTEtmL",
      "https://drive.google.com/uc?export=view&id=1BnNqHiGsiVwWj0ShBb_gO0rtRPodnC9R",
      "https://drive.google.com/uc?export=view&id=1R60mCRmmuKnOHxBmZ3PvXunwSGD6bEXf",
      "https://drive.google.com/uc?export=view&id=1ceVc1uBlF53fpPyTegrRd7uSM_qBUAxw",
      "https://drive.google.com/uc?export=view&id=10gxoDZV_mTdb_CJp7Ky8naxVLB28Wgli",
      "https://drive.google.com/uc?export=view&id=1NJGgrb2F6qZ8_FQc7A2geHrlUZv1byx-",
      "https://drive.google.com/uc?export=view&id=1MGoa0LWuZpXLXT6SQdcZ6kYuY5aKWHNI",
      "https://drive.google.com/uc?export=view&id=1YopvfQUO4JrctyTUrA0ghcRUhEDSYLcM",
      "https://drive.google.com/uc?export=view&id=1HKU4NqUKpWK47d-buTNIkp-cTamD2EuL",
      "https://drive.google.com/uc?export=view&id=1Df53UnQjaISulpJUWsHdxxc-0Pbig2Vx",
      "https://drive.google.com/uc?export=view&id=1-u9KDvvRzNOzGYkREDlP6SvkDfF1Ih7n",
      "https://drive.google.com/uc?export=view&id=1eRTryLstugrMKBdiQnEQvrDP22hFTqO-",
      "https://drive.google.com/uc?export=view&id=1MUuk-k27ee6XDzNLKj7nSJ2nF-ne2df_",
      "https://drive.google.com/uc?export=view&id=1poMoxopWZmCogYiRWnA104tXDwRj_mgj",
      "https://drive.google.com/uc?export=view&id=1_7IJ5HlPy3e2R2z4n09vD1csc1FB15UR",
      "https://drive.google.com/uc?export=view&id=1GiM5quwVcHgzBV6gZFWEK0F0e1hx0sUy",
      "https://drive.google.com/uc?export=view&id=1VsJsm-Wjv7i7itpLaOUk4F4qB1nsWdhj",
      "https://drive.google.com/uc?export=view&id=1KzfvsK17ayf5hpijhUtbqKUxj2hQkgf-",
      "https://drive.google.com/uc?export=view&id=1RPAMTkfbmy0h8cgeFiFgWw_Y2_XCr7Wc",
      "https://drive.google.com/uc?export=view&id=1G97O_C4q4wyb1szSS7zAk94xD4RavqqH",
      "https://drive.google.com/uc?export=view&id=1jdXJWgwgdH4JkJDmMQ_FQU6cat9qcdL3",
      "https://drive.google.com/uc?export=view&id=1YMX-3F3jE-nl9kGzfhowhzw_YtBGcgdg",
      "https://drive.google.com/uc?export=view&id=1BAEFbc7MSUZS9oNJQ67BsfzjpQiBRUrI",
    ],
  },
  "Fracture Aids": {
    cardImage: IMG.fractureaids,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1vRJwjS3ikFCHH3MzBJ2XVkel_Qh3_ltT",
      "https://drive.google.com/uc?export=view&id=1RvySAdVBkv_AM7ZgGt90JNprsQWUlH-4",
      "https://drive.google.com/uc?export=view&id=1Z3r5QTpGAs8KYbhKa7zIqIyh0gBEhHKv",
      "https://drive.google.com/uc?export=view&id=1mUBLJJjay4vIxTRjRl5JhCSj2fU4qIdB",
      "https://drive.google.com/uc?export=view&id=1zA-DJK8Xeww4K_LCSFKvpiVWxXDHb7Bk",
      "https://drive.google.com/uc?export=view&id=1VgL4L0rWbHANyuwso7kuaVlex4slmcEw",
      "https://drive.google.com/uc?export=view&id=18SUBOjEIZe5MW194hyI5YUZo7wfwpo_N",
      "https://drive.google.com/uc?export=view&id=1-l7LJI7Gpk4eFp1NYd-z1YCDq9_VNkyD",
      "https://drive.google.com/uc?export=view&id=1tm3Aom3WUKPeapahDy1mSMqVoeK6irKC",
      "https://drive.google.com/uc?export=view&id=1USJYZ_ee4ElBRohuNabTgJW_QxrhtSL2",
      "https://drive.google.com/uc?export=view&id=1mZTlAdgupB-UZcB3-ge6BBFJjQVOhS7e",
      "https://drive.google.com/uc?export=view&id=1hEhD94uu6brmyZA1Um8NEggBdiBUAc0V",
      "https://drive.google.com/uc?export=view&id=1TWONfETDjJgWdrZGjorFNeg7uhuJbc0n",
      "https://drive.google.com/uc?export=view&id=18MyYi2mzRu-HBy98bH102L1bzdhxtRQc",
      "https://drive.google.com/uc?export=view&id=1kIblO__b3sBzkft8ZjKaJqU0eRlukINy",
    ],
  },
  "Knee Support / Braces": {
    cardImage: IMG.orthopedic,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1XPGI21aFOYAQccXtKYpbhqo9FmN8vbd5",
      "https://drive.google.com/uc?export=view&id=1LMHUz3z0UlZ4ZHXTlpE6ZdVAU7eDr7hs",
      "https://drive.google.com/uc?export=view&id=1MyuM4vi06DhuzOBNK-Sm7i177pJEjiTw",
      "https://drive.google.com/uc?export=view&id=1gSFKnUJL811r3NZj06Yq3SXdL8IQnvOV",
      "https://drive.google.com/uc?export=view&id=1L19FX8HNq_gITV6SKKqnQnzc6VJnF-BJ",
      "https://drive.google.com/uc?export=view&id=19PygGvVfDHyblQAM6VS5JpKSL1Nxg5gB",
      "https://drive.google.com/uc?export=view&id=1mO9nFyzQgVtHfedYEeskXf3KYETE1Xq5",
      "https://drive.google.com/uc?export=view&id=1GfyFdxN70SNU73_4CbE8vKVJnew48pYq",
      "https://drive.google.com/uc?export=view&id=15ER9n2O-zVplAl7CYQuZq3zGXL_cXCA9",
      "https://drive.google.com/uc?export=view&id=1A6cnCO7Rzyd5yNuh79sGG8gY1TMPu-rm",
      "https://drive.google.com/uc?export=view&id=1avfizZArXN-HHkgH-DR7gPIXJW8u4FCk",
      "https://drive.google.com/uc?export=view&id=195ON5jvs7K7c_D_eaZPm53CVGvjF0BFm",
      "https://drive.google.com/uc?export=view&id=143hgXlWlp4Qi8QdTEa8WEWIXD85banrw",
      "https://drive.google.com/uc?export=view&id=1AbNl6FGI_v8NGFhokT4ytUGZmguh-CZA",
      "https://drive.google.com/uc?export=view&id=1KWojMmzRToFNC50Lg2f-SnLLj4WD7tor",
      "https://drive.google.com/uc?export=view&id=1Hqt9mob8DvNvrlPkG29-N7ujCABxeMQL",
      "https://drive.google.com/uc?export=view&id=1lXcc6RCeUXd_sBL-L82oEh1QD8qOlFsO",
    ],
  },
  "Ankle Support / Braces": {
    cardImage: IMG.walkingaids,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1cD4iAyzVkkVBAOgajWV3JmuAPhSezSel",
      "https://drive.google.com/uc?export=view&id=1xY-TnFIhiXYFyNCp2GL9x-shspLyyZ6X",
      "https://drive.google.com/uc?export=view&id=1urjtDJ7tQAZLYDV5rj3zrFJbyiIq_185",
      "https://drive.google.com/uc?export=view&id=1QumSPXicN1dKmGQQkCZUZO1b1VnhK1wK",
      "https://drive.google.com/uc?export=view&id=1Pp3xvCOwv6ayl69GjvLgqFIs2qx5fw0I",
      "https://drive.google.com/uc?export=view&id=12n3rkt0bTX1fKaQDPo41OJpVpnA1ny6N",
      "https://drive.google.com/uc?export=view&id=1Pd1ndDMD7qi2IGmrNP2YfwFq5U5lrcbl",
      "https://drive.google.com/uc?export=view&id=1seJ_ELgmX_thH1taGGqmT1N8n3u_oM6z",
      "https://drive.google.com/uc?export=view&id=1CYtYAj0kxwuQG5x22c65T98NrzYqfBbd",
      "https://drive.google.com/uc?export=view&id=1Kg3D4jbk2nqs6UxiG-dUz7c2t3j5Z2Zu",
      "https://drive.google.com/uc?export=view&id=1bk2MmLVYgxZfZY4xu987aDMcpc94Y8GH",
      "https://drive.google.com/uc?export=view&id=10wXMX9hosLlvpB_rUmQCvqrENIkjqC0v",
      "https://drive.google.com/uc?export=view&id=18OPLD4Ex0sGO_nTPcbdy9OFqxoXPZHOw",
      "https://drive.google.com/uc?export=view&id=1qWauaTHhbuNVXZLaC7IpZx5d_Az9VxNz",
      "https://drive.google.com/uc?export=view&id=15Cf0C32xU4WJkgSwt5-bRUoj7h3per3E",
    ],
  },
  "Thigh & Calf Support / Varicose Vein Compression Stockings": {
    cardImage: IMG.thighcalf,
    subImages: [
      "https://drive.google.com/uc?export=view&id=13fC_sGyfUrXBGrHalbCnhyNdrmOP6gcF",
      "https://drive.google.com/uc?export=view&id=1oJ6afb-1_XItQ02-0EeO9xsVONOm-1_g",
      "https://drive.google.com/uc?export=view&id=18cG07-kxSmft68b0wjRmYO0a0rnlyqNN",
      "https://drive.google.com/uc?export=view&id=1Gx6fgGcACwndXzdXOiJvEh2_zyDYgciA",
      "https://drive.google.com/uc?export=view&id=1ML-ti0S_QCTDnWDGJ3WXOf7qLk9yF_c7",
      "https://drive.google.com/uc?export=view&id=1B7sHeJSNGjkq5pJG9pu3cA0YXqFhsKtz",
      "https://drive.google.com/uc?export=view&id=140XPvd9Szi7pFky4D-oGMS-h4zUR76LG",
      "https://drive.google.com/uc?export=view&id=1lYvZF0uSWpr2lVQahNzXhuGHFFlQhOEv",
      "https://drive.google.com/uc?export=view&id=1nMvpeCS7TS72wyMOHDmwHO0RzvKrJ2yl",
      "https://drive.google.com/uc?export=view&id=1d6qhEjbZRg1fhIOgE1VUygGbrUFc7wOd",
      "https://drive.google.com/uc?export=view&id=1ur4bnk1Vfw7y6WhN-w_ni9aSt2dz00jV",
      "https://drive.google.com/uc?export=view&id=1DBedF4l3tpHREYaWSVMdK5u0u6G8SsWv",
      "https://drive.google.com/uc?export=view&id=1N2g-rli5J7ADYeqdJ9jWH3bUO07Ump7F",
      "https://drive.google.com/uc?export=view&id=1rwdOlxic-WBIC90HPyQKX323bnF6urSc",
    ],
  },
  "Surgical Dressing": {
    cardImage: IMG.surgicaldressing,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1s5RnaT1CafWTXnrA1A75mY9lnISfFAqM",
      "https://drive.google.com/uc?export=view&id=1iQt2SFTYcDgMUiqFC3QuEfUFvbejPP7g",
      "https://drive.google.com/uc?export=view&id=1iRt2HbbO9tGtN-sRkeWyG6PBX-H0_ZCL",
      "https://drive.google.com/uc?export=view&id=1Uq1ozB84GtiyPqUtl0KLr33faoQpy-4R",
    ],
  },
  "Sport Gear": {
    cardImage: IMG.sportgear,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1_pIm0MQ-MVu_wtuUJZ_cTLHArcvHsode",
      "https://drive.google.com/uc?export=view&id=1xf-NhIQ0M77iXrD3uFhel18FtlcxOslt",
      "https://drive.google.com/uc?export=view&id=1KjB6XroVKAmevzgQOF3fgH-sgnjURVl5",
      "https://drive.google.com/uc?export=view&id=1WWAh9NtFeaAwjNgLqyK8k8K19bF_0-wE",
      "https://drive.google.com/uc?export=view&id=1jcpqkngXWWtZpW7Jxdg--mqe1ntCEiI6",
      "https://drive.google.com/uc?export=view&id=13bUFUUOy60Du1sgoLJLnEOOk77SWr5no",
      "https://drive.google.com/uc?export=view&id=1XH1SW8fZwPXSqeIxBTXosS1yqLdp7VeZ",
      "https://drive.google.com/uc?export=view&id=1h8A7SVaUt1OmdLyPKNTWVv-xN0HclfcI",
      "https://drive.google.com/uc?export=view&id=1HrEUJF6nw1GNFjYxJrZrTqyR1tD2afFa",
      "https://drive.google.com/uc?export=view&id=1j8GayKf12KGdh03bXqE0Q483dJuuci35",
      "https://drive.google.com/uc?export=view&id=1M-QfhCPW0O1uRu1WyWe1doBQNruzJ9-e",
      "https://drive.google.com/uc?export=view&id=1Qjoyiv32jUtXnR-YDvjes8HS1hjBcRhQ",
      "https://drive.google.com/uc?export=view&id=1jnY5siIrpMss--P0swxMIANM_iCfrjFF",
      "https://drive.google.com/uc?export=view&id=1iJUx0hiWjlojs7MUeJLDY-2jLIaU9Hag",
      "https://drive.google.com/uc?export=view&id=1rcc-XSGfWLYv6xI6i294MHR9r3J1B4S3",
      "https://drive.google.com/uc?export=view&id=1D0VVW-vSMArcUUjARlLoA6i7PhAqbsmL",
      "https://drive.google.com/uc?export=view&id=1ifC8jX3YxLdH9aUEy-fYZzH3hr50_4Q1",
      "https://drive.google.com/uc?export=view&id=1JEAYMVad-D3PX4DvOC-qP8xQBd0AAy6m",
      "https://drive.google.com/uc?export=view&id=1TM0EQUL09Uc1nvLWw_nGQFpxPAx9lsL9",
      "https://drive.google.com/uc?export=view&id=1fHMQ7tFEpfEbMZG3NxKfnzLpe4xxoiVn",
    ],
  },
  "Junior / Paediatric Range": {
    cardImage: IMG.last,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1oWrDZztHrPLgDBBQPj4N2WWmRCwpz7n7",
      "https://drive.google.com/uc?export=view&id=1jaAamFsR9bVtIVAQpIsO7pRYaVl2o2LS",
      "https://drive.google.com/uc?export=view&id=1hgYLVKrQZk4cLSF7nID9xW_5LOJ4f91O",
      "https://drive.google.com/uc?export=view&id=1-o9WhzUX9iyc29lX37eszEVh3KRyjhSo",
      "https://drive.google.com/uc?export=view&id=13a10k2OYg4waswDBJalVEZzlx4VVrATv",
      "https://drive.google.com/uc?export=view&id=1e_SeR4WPh-U4ixp7L-UOY2Pyo5nGU0aX",
      "https://drive.google.com/uc?export=view&id=11LswtBXe5LtoK-siI049YGQ5Xe_4K-7G",
      "https://drive.google.com/uc?export=view&id=1l40f-59xHphWb_FyCvzTDoudBku74DeD",
      "https://drive.google.com/uc?export=view&id=1ayUX8pOnlmWZpbSHwEKaJ-D1GR_SZnO-",
      "https://drive.google.com/uc?export=view&id=12ARIM45trycZGihzzL6fY64cf-SYHOiP",
      "https://drive.google.com/uc?export=view&id=1hP-o52cheBc2sq-0LxaQ17nBQxP00s1W",
      "https://drive.google.com/uc?export=view&id=1qGpv3uTaCtkM5zUOkiWCRRit3-6fUxRc",
      "https://drive.google.com/uc?export=view&id=1je5V_Y9TcGlBSsQyqvTcvLCp4TqPnMkN",
      "https://drive.google.com/uc?export=view&id=1SWlM-ndJDl8eJuPK2KuS-qrNPlGzcBwB",
      "https://drive.google.com/uc?export=view&id=145MvIJ4RvXObr46B_PzR0BTCwYCe2T5A",
      "https://drive.google.com/uc?export=view&id=1rhQxezBq9tEailD9IwduyLAk0fKQIRgu",
    ],
  },
  "Wrist & Forearm Support / Splints": {
    cardImage: IMG.wrist,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1EPutZhnm8TGL44rz9x0Avsk82Btojz_H",
      "https://drive.google.com/uc?export=view&id=1NVojAaT0R4qbU5A53IfgKvtZxPf3saBl",
      "https://drive.google.com/uc?export=view&id=1nvGQyGGJDz8CSVrzWgs1Q7p6nfOD8HMB",
      "https://drive.google.com/uc?export=view&id=1C8uZTwju5lUsYLVesqQxcGfajxMVAu-i",
      "https://drive.google.com/uc?export=view&id=1ifmxGQpNgabIzPKhpqoh_6MpT2TCQerv",
      "https://drive.google.com/uc?export=view&id=1MV8gT_dDCOFUmFM62W5eb8fpJzm71px3",
      "https://drive.google.com/uc?export=view&id=1BhJuc0HLpEstlbtaUqaJRD99LQf5M76s",
      "https://drive.google.com/uc?export=view&id=1CjH-raJLewUY7PY1K1hFe6xbuSQkaRth",
      "https://drive.google.com/uc?export=view&id=1QubZw5-vXV8UJZq2LxcIwAbKFicOBHAM",
      "https://drive.google.com/uc?export=view&id=13guBH4m-mwpASZ2D5784XXf2DnW_vGki",
      "https://drive.google.com/uc?export=view&id=170Gunmx8gREqiApniEkIzRSEkStWNtMW",
      "https://drive.google.com/uc?export=view&id=1Uz5T7fD0saFqIm3B9NdQkhWqdEDoAcDJ",
      "https://drive.google.com/uc?export=view&id=19KU04YyNBa3h_w_e3B4FC2Y2fMfnWpVY",
      "https://drive.google.com/uc?export=view&id=1ivtv88N5hCbKQeKAZJPzZQb9d5XReOWI",
      "https://drive.google.com/uc?export=view&id=175yDXXoX_NpPw3_tZ_y10fpNbS40-AJR",
      "https://drive.google.com/uc?export=view&id=1HDmdkWxuqFmWtQMG7z8UpPQJHbzvMajX",
    ],
  },
  "Finger Splints": {
    cardImage: IMG.fingersplints,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1_D8-kku49ew6m_tqEYCpSXAouZBGzYGC",
      "https://drive.google.com/uc?export=view&id=1glVurkREE_KdpxPMcLEcaIF2nsoJqftz",
      "https://drive.google.com/uc?export=view&id=1wIPtEDApr_AHoGOv2G-ePbn1CUVu4Ody",
    ],
  },
  "Physiotherapy & Rehabilitation": {
    cardImage: IMG.physiotherapy,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1mwgOi3mYYA9Z1A9Z4T5ajj2yosq8UMVj",
      "https://drive.google.com/uc?export=view&id=14qEg2xQGTZqOEqcm4zTwu0qLYU2s6UGW",
      "https://drive.google.com/uc?export=view&id=16EmP_2rudGE5i9ML0lOUkZ4u9Yswjmhl",
      "https://drive.google.com/uc?export=view&id=1wrhPBnGQEqdjUeT5rn2q8Rhxlsk9ZEQU",
      "https://drive.google.com/uc?export=view&id=1B4Wc8a6QCO_tNwYK494DH7ifrQlHVnqu",
      "https://drive.google.com/uc?export=view&id=1InYwh1h5hM9fczh1c69GA97KCOhyzttU",
      "https://drive.google.com/uc?export=view&id=1XFJkGAF4g6Kk4s-smuzB7nYOIkuNfYLq",
      "https://drive.google.com/uc?export=view&id=1UKmPlUfzlEDhxuzl54huehsfEmnvBwUV",
      "https://drive.google.com/uc?export=view&id=1Synja4QVg3Tw409CJ60xwYIOKN_-lHq3",
      "https://drive.google.com/uc?export=view&id=17U1qEPfVOKj-sMP93A0KYteJH7Pw9VL4",
      "https://drive.google.com/uc?export=view&id=1LJxwOaZ6DZs_4ijyyVzk5C95Ror8XvJ0",
      "https://drive.google.com/uc?export=view&id=1rl9R3pxHdO7GaugFoGzT15ys6nI2InAS",
      "https://drive.google.com/uc?export=view&id=1UyDup6eEiXpmbSqHXuA_jxS8JWuwUV-a",
      "https://drive.google.com/uc?export=view&id=1KlDl-G2_CU10MGIyToYo7vxjOnfWlgTM",
      "https://drive.google.com/uc?export=view&id=1WWUjlS1g2SU_TWt0di-sVe34dJ-AjseY",
      "https://drive.google.com/uc?export=view&id=1zPR70yfnkxPiBtbxmywA4AbcydGPVFmD",
      "https://drive.google.com/uc?export=view&id=1qhrHzdNp41AKfJv6VAKS6j3g3Jeccblo",
      "https://drive.google.com/uc?export=view&id=1CWxydRSJ2BgXcUQNXIB6brxzitEaFvTu",
      "https://drive.google.com/uc?export=view&id=1oPjua0ZpXKY0B3BG6rj7xOHK2a0jt03_",
      "https://drive.google.com/uc?export=view&id=1BHku92L758nNEZ8ue7_r7XToFaaDYRRS",
      "https://drive.google.com/uc?export=view&id=160Sr2m1DK9FznFZEMwZx2GJYnho4JOoT",
      "https://drive.google.com/uc?export=view&id=1jFxAFPc8L5xSjOGH_dK8Y-GKzreFYz2c",
      "https://drive.google.com/uc?export=view&id=1AJ7ZoY7IiKg36O4BcuMGrfYUpVbund7O",
      "https://drive.google.com/uc?export=view&id=1bITlDFQvVuUKceieov2k6PfBxtB7ca4P",
      "https://drive.google.com/uc?export=view&id=1HLEfzOa0HpZgtFTTMDcidIIaNArtlwNw",
      "https://drive.google.com/uc?export=view&id=1E8OnfeLlrcKFobjBuM99ydKNNpyWiP-5",
      "https://drive.google.com/uc?export=view&id=1La3yRt-behAWNJab7GEzM0JLU31RTHNp",
      "https://drive.google.com/uc?export=view&id=1j_mdweJy4AVzDNCbCHWiofyprOCbLBuM",
      "https://drive.google.com/uc?export=view&id=1KlsMwCCV5XPIiuK19xjSw0naDCTg2-Gg",
      "https://drive.google.com/uc?export=view&id=1wOn-AmuTF945iL2lxO_vW-_FM1_kCjYO",
      "https://drive.google.com/uc?export=view&id=1hyhCyRrYFXRzHDD57rcxMJ_Wolf5aQj8",
      "https://drive.google.com/uc?export=view&id=1g8DgF1jSh4CtUAkvhBZqDiIoEzzK-gUA",
    ],
  },
  "Walking Aids & Mobility": {
    cardImage: IMG.walkingaids,
    subImages: [
      "https://drive.google.com/uc?export=view&id=1vD5NTkDKkUWIVhKdHlreELyJmTwEJoGg",
      "https://drive.google.com/uc?export=view&id=1cLdo48-7S4-wfm-N3v3fyKkYW4FQ0e6Z",
      "https://drive.google.com/uc?export=view&id=1rAZCr854RnsOT9E5ei-19xOBRt4dqVpK",
      "https://drive.google.com/uc?export=view&id=1tSEl-PnVCab3H_gHPu6MC5uugJPvoRMW",
      "https://drive.google.com/uc?export=view&id=1HuHOWuAe78iNtMNoAUtD5UpCl-FlFm0p",
      "https://drive.google.com/uc?export=view&id=15nev9TxF28Z1KOjoLKf13GJsO-2sEY1l",
      "https://drive.google.com/uc?export=view&id=1NNJHtXdVxaOBy6RBFnZF4U6Lok2yvZWh",
      "https://drive.google.com/uc?export=view&id=1mlH33KtxjxP-ObxoEOJbaJWiXB8DnTKW",
      "https://drive.google.com/uc?export=view&id=1xdlQ6op4Y4bcRA8a39papW5jML-5a6HW",
      "https://drive.google.com/uc?export=view&id=10fOf4TKxseERAyo_9-Iykzi_x6GF-bRQ",
      "https://drive.google.com/uc?export=view&id=1bxyT_JCbCl4WkfiOmZbdtRqxGXMEiUHc",
      "https://drive.google.com/uc?export=view&id=1y2XWedEStb1c2OSWGMtUCXKN4RitXsQJ",
      "https://drive.google.com/uc?export=view&id=1EMWMmfbQlziaICqIRENGvtye6rE0t6_1",
      "https://drive.google.com/uc?export=view&id=1HiOYhJGTARGCTi_zU188Q5i0XyHpGdni",
      "https://drive.google.com/uc?export=view&id=10WU8p31zkKo2waihP8_x8AJgWu3jA7kt",
      "https://drive.google.com/uc?export=view&id=19k8MAqWA2ymY-fElONbhHVt6tijSqvQq",
      "https://drive.google.com/uc?export=view&id=1kE8MxpF98Rt-OM7nW6w2bs3bVXz4XTO2",
      "https://drive.google.com/uc?export=view&id=1eJ6eq3k0iQz8i7y_j-21W-ZYnTvj7pNR",
    ],
  },
};

const enrichProduct = (product) => {
  const catName = product.category?.name || product.category || "";
  const localData = LOCAL_IMAGE_MAP[catName] || {};
  const enrichedSubproducts = (product.subproducts || []).map((sub, i) => ({
    ...sub,
    image: localData.subImages?.[i] || sub.image || null,
  }));
  return {
    ...product,
    cardImage: localData.cardImage || product.image || null,
    subproducts: enrichedSubproducts,
  };
};

// ─── Component ─────────────────────────────────────────────────────────────────
const Products = () => {
  const [products, setProducts]           = useState([]);
  const [categories, setCategories]       = useState(["All"]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]     = useState("");
  const [viewMode, setViewMode]           = useState("grid");
  const [modalProduct, setModalProduct]   = useState(null);
  const [quoteProduct, setQuoteProduct]   = useState(null);
  const [selectedSubproduct, setSelectedSubproduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/products");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        const enriched = data.map(enrichProduct);
        setProducts(enriched);
        const catNames = [...new Set(
          enriched.map((p) => p.category?.name || p.category || "")
        )].filter(Boolean);
        setCategories(["All", ...catNames]);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Could not load products. Please make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getCategoryName = (p) => p.category?.name || p.category || "";

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const openWhatsApp = (productName) => {
    const msg = `Hi, I'm interested in *${productName}*. Please share more details.`;
    window.open(`https://wa.me/918347480205?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const checkoutWhatsApp = () => {
    const lines = cart.map((c) => `• ${c.name} (Qty: ${c.qty})`).join("\n");
    const msg = `Hi, I'd like to order the following products:\n\n${lines}\n\nPlease share more details.`;
    window.open(`https://wa.me/918347480205?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const filtered = products.filter((p) => {
    const catName = getCategoryName(p);
    const matchCat = activeCategory === "All" || catName === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      q === "" ||
      p.name?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      catName.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="products-page">
      {modalProduct ? (
        <div className="detail-view">
          <div className="detail-header">
            <button className="btn-back" onClick={() => setModalProduct(null)}>← Back</button>
            <div className="detail-header-info">
              <p className="modal-eyebrow">{getCategoryName(modalProduct)}</p>
              <h2>{modalProduct.name}</h2>
              <p className="modal-desc">{modalProduct.description || modalProduct.desc}</p>
            </div>
          </div>
          <div className="detail-products">
            <h4 className="modal-products-heading">Products Included</h4>
            <ul className="modal-subproducts-list">
              {(modalProduct.subproducts || []).map((item, index) => (
                <li key={index} className="modal-subproduct-item" onClick={() => setSelectedSubproduct(item)}>
                  <div className="modal-subproduct-img-wrap">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`modal-subproduct-img ${item.contain ? "modal-subproduct-img-contain" : ""}`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div className="modal-subproduct-emoji" style={{ display: item.image ? "none" : "flex" }}>🏥</div>
                  </div>
                  <p className="modal-subproduct-name">{typeof item === "object" ? item.name : item}</p>
                  {item.desc && <p className="modal-subproduct-desc">{item.desc}</p>}
                  <div className="subproduct-actions">
                    {cart.find((c) => c.name === item.name) ? (
                      <div className="qty-control" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setCart(prev => {
                          const existing = prev.find(c => c.name === item.name);
                          if (existing.qty === 1) return prev.filter(c => c.name !== item.name);
                          return prev.map(c => c.name === item.name ? { ...c, qty: c.qty - 1 } : c);
                        })}>−</button>
                        <span>{cart.find((c) => c.name === item.name).qty}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    ) : (
                      <button className="btn-add-bag" onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                        + Add to Bag
                      </button>
                    )}
                    <button className="btn-whatsapp" onClick={(e) => { e.stopPropagation(); openWhatsApp(item.name); }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.135 1.527 5.882L.057 23.5l5.752-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.502-5.19-1.383l-.371-.22-3.814.999 1.018-3.714-.242-.383A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {selectedSubproduct && (
              <div className="subproduct-popup-overlay" onClick={() => setSelectedSubproduct(null)}>
                <div className="subproduct-popup" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setSelectedSubproduct(null)}>✕</button>
                  <p className="modal-eyebrow">Product Details</p>
                  <h3>{selectedSubproduct.name}</h3>
                  <p className="modal-desc">{selectedSubproduct.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <section className="products-hero">
            <p className="products-eyebrow">CATALOG</p>
            <h1 className="products-title">
              Our complete{" "}
              <span className="products-title-accent">healthcare product range</span>
            </h1>
            <p className="products-subtitle">
              Browse our extensive range of medical, surgical, orthopedic,
              rehabilitation and wellness products.
            </p>
          </section>

          <section className="products-controls">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search categories or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="view-toggles">
                <button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>⬜</button>
                <button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}>☰</button>
              </div>
            </div>
            <div className="category-pills">
              {categories.map((cat) => (
                <button key={cat} className={`pill ${activeCategory === cat ? "pill-active" : ""}`} onClick={() => setActiveCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <section className="products-grid-section">
            {loading && (
              <div className="loading-state">
                <div className="loading-spinner" />
                <p>Loading products...</p>
              </div>
            )}
            {error && !loading && (
              <div className="error-state"><p>⚠️ {error}</p></div>
            )}
            {!loading && !error && (
              <div className={`products-grid ${viewMode === "list" ? "products-list" : ""}`}>
                {filtered.map((product) => (
                  <div className="product-card" key={product._id}>
                    <div className="product-card-img placeholder-card">
                      {product.cardImage ? (
                        <img src={product.cardImage} alt={getCategoryName(product)} className="product-image" />
                      ) : product.image ? (
                        <img src={product.image} alt={getCategoryName(product)} className="product-image" />
                      ) : (
                        <div className="placeholder-icon">🏥</div>
                      )}
                    </div>
                    <div className="product-card-body">
                      <p className="product-category-name">{getCategoryName(product)}</p>
                      <p className="product-card-desc">{product.description || product.desc}</p>
                      <div className="product-card-footer">
                        <button className="btn-view-details" onClick={() => { setModalProduct(product); window.scrollTo(0, 0); }}>
                          View Details →
                        </button>
                        <button className="btn-quote-icon" onClick={() => setQuoteProduct(product)}>💬</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loading && !error && filtered.length === 0 && (
              <div className="no-results">No products found.</div>
            )}
          </section>
        </>
      )}

      {cart.length > 0 && (
        <button className="btn-cart-float" onClick={() => setShowCart(true)}>
          🛒 {cart.reduce((a, c) => a + c.qty, 0)}
        </button>
      )}

      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Your Bag</h3>
              <button className="modal-close" onClick={() => setShowCart(false)}>✕</button>
            </div>
            <ul className="cart-list">
              {cart.map((c, i) => (
                <li key={i} className="cart-item">
                  <span className="cart-item-name">{c.name}</span>
                  <div className="cart-item-qty">
                    <button onClick={() => setCart(prev => prev.map(x => x.name === c.name ? { ...x, qty: Math.max(1, x.qty - 1) } : x))}>−</button>
                    <span>{c.qty}</span>
                    <button onClick={() => setCart(prev => prev.map(x => x.name === c.name ? { ...x, qty: x.qty + 1 } : x))}>+</button>
                    <button className="cart-item-remove" onClick={() => setCart(prev => prev.filter(x => x.name !== c.name))}>🗑</button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn-checkout" onClick={checkoutWhatsApp}>Checkout via WhatsApp</button>
          </div>
        </div>
      )}

      {quoteProduct && (
        <QuoteModal product={quoteProduct} onClose={() => setQuoteProduct(null)} />
      )}
    </div>
  );
};

export default Products;
