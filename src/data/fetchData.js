export const createdTime = () => {
    var d = new Date();
    return (d.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }))
}


export const initialState = {
    conversations:
        [
            {
                id: '1',
                imageUrl: require("../images/profiles/avatar.png"),
                imageAlt: 'Morteza',
                username: 'Morteza',
                unread: 5,
                messages: [
                    {
                        messageText: `Sed convallis sed mauris eget dapibus.`,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    Sed convallis sed mauris eget dapibus. 
                    In gravida nulla sit amet justo varius pellentesque.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `MQuisque euismod dapibus elit. Vestibulum et sodales nibh.
                     Nulla facilisi.`,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    Sed vehicula, lacus vitae hendrerit condimentum, mi odio condimentum augue, 
                    id lacinia nisi orci in diam.`,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `
                    Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `Hey mate what's up?`,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `Love you?`,
                        createdAt: createdTime(),
                        self: false
                    }
                ]
            },
            {
                id: '2',
                imageUrl: require("../images/profiles/avatar.png"),
                imageAlt: 'Ghazaleh',
                username: 'Ghazaleh',
                unread: 2,
                messages: [
                    {
                        messageText: 'Ok fair enough. Well good talking to you.',
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        Not sure exactly yet. It will be next year sometime. Probably late.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: 'Yeah I know. But oh well. So when is the big date?',
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        Well I know you like doing that stuff. But honestly I think
                        you are already really talented. It's a shame you haven't found
                        what you are looking for yet.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `
                        I'm doing ok. Just working on building some applications to
                        bulk up my resume, so I can get a better job.
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        I've just been really busy at work myself, looking to get
                        married sometime next year too. How are you going?
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: 'Yes it has been a little while',
                        createdAt: createdTime(),
                        self: true
                    },
                ]
            },
            {
                id: '3',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Mohmmad Mahdi',
                username: 'Mohammad Mahdi',
                unread: 0,
                messages: [
                    {
                        messageText: 'Hi',
                        createdAt: createdTime(),
                        self: true
                    }
                ]
            },
            {
                id: '4',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Mom',
                username: 'Mom',
                unread: 0,
                messages: [
                    {
                        messageText: 'Hi Mommy!',
                        createdAt: '2:49',
                        self: true
                    }
                ]
            },
            {
                id: '5',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Dad',
                username: 'Dad',
                unread: 0,
                messages: [
                    {
                        messageText: `Hello Daddy, How've you been?`,
                        createdAt: '6:14 PM',
                        self: true
                    }
                ]
            },
            {
                id: '6',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Fatemeh',
                username: 'Fatemeh',
                unread: 1,
                messages: [
                    {
                        messageText: `Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    `,
                        createdAt: '1 week ago',
                        self: true
                    },
                    {
                        messageText: ` 
                    Sed vehicula, lacus vitae hendrerit condimentum, mi odio condimentum augue, 
                    id lacinia nisi orci in diam.`,
                        createdAt: '1 week ago',
                        self: false
                    }
                ]
            },
        ],
    selectedConversation: {}
}


export const getInitData = () => {
    initialState.selectedConversation = initialState.conversations[0];
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(initialState);
        }, 5000)
    );
}

