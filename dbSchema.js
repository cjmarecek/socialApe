let db = {
  users: [
    {
      userId: 'aalskdfjsladfkj',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/asljlsdkfjsldfkjslf',
      bio: 'Hello, my name is user, nice to meet you.',
      website: 'https://user.com',
      location: 'London, UK',
    },
  ],

  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2020-04-02T20:35:37.549Z',
      likeCout: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'asdklaksjfhaskldfj',
      body: 'Nice one mate!',
      createdAt: '2020-04-02T20:35:37.549Z',
    }
  ],
  notifications: [
    {
      recipient: 'user', 
      sender: 'john', 
      read: 'true | false', 
      screamId: 'like | comment',
      type: 'like | comment',
      createdAt: '2020-04-02T20:35:37.549Z'
    }
  ]
};

const userDetails = {
  //Redux data
  credentials: {
    userId: 'aalskdfjsladfkj',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/asljlsdkfjsldfkjslf',
    bio: 'Hello, my name is user, nice to meet you.',
    website: 'https://user.com',
    location: 'London, UK',
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'asaskldjfhaskldjf'
    },
    {
      userHandle: 'user',
      screamId: 'asdfoweroskdflsdf'
    },
  ]
}
