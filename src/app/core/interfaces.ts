export interface User {
  "identifier": string
  "password": string
}

export interface Articles {
  "id": "string",
  "title": "string",
  "annotation": "string",
  "text": "string",
  "img": {
    "id": "string",
    "name": "string",
    "alternativeText": "string",
    "caption": "string",
    "width": 0,
    "height": 0,
    "formats": {},
    "hash": "string",
    "ext": "string",
    "mime": "string",
    "size": 0,
    "url": "string",
    "previewUrl": "string",
    "provider": "string",
    "provider_metadata": {},
    "related": "string",
    "created_by": "string",
    "updated_by": "string"
  },
  "tags": [
    {
      "id": "string",
      "Tag": "string",
      "articles": [
        "string"
      ],
      "published_at": "string",
      "created_by": "string",
      "updated_by": "string"
    }
  ],
  "comments": [
    {
      "id": "string",
      "comment": "string",
      "user": "string",
      "article": "string",
      "published_at": "string",
      "created_by": "string",
      "updated_by": "string"
    }
  ],
  "author": {
    "id": "string",
    "username": "string",
    "email": "string",
    "provider": "string",
    "password": "string",
    "resetPasswordToken": "string",
    "confirmationToken": "string",
    "confirmed": true,
    "blocked": true,
    "role": "string",
    "avatar": "string",
    "Firstname": "string",
    "Surname": "string",
    "gender": "male",
    "status": "admin",
    "favorites": [
      "string"
    ],
    "comments": [
      "string"
    ],
    "articles": [
      "string"
    ],
    "liked_articles": [
      "string"
    ],
    "created_by": "string",
    "updated_by": "string"
  },
  "liked_bies": [
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "provider": "string",
      "password": "string",
      "resetPasswordToken": "string",
      "confirmationToken": "string",
      "confirmed": true,
      "blocked": true,
      "role": "string",
      "avatar": "string",
      "Firstname": "string",
      "Surname": "string",
      "gender": "male",
      "status": "admin",
      "favorites": [
        "string"
      ],
      "comments": [
        "string"
      ],
      "articles": [
        "string"
      ],
      "liked_articles": [
        "string"
      ],
      "created_by": "string",
      "updated_by": "string"
    }
  ],
  "published_at": "2021-07-13T08:37:43.145Z"
}





