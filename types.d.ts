type user_data = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    avatar: string;
    password: string;
    country: string;
    city: string;
};


export type user_login = {
    email: string;
    password: string;
};

type user_update = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    avatar: string;
    country: string;
    city: string;
};

type user_update_password = {
    old_password: string;
    new_password: string;
};

type user_update_avatar = {
    avatar: string;
};

type user_update_phone = {
    phone: string;
};

type user_update_email = {
    email: string;
};

type user_update_country = {
    country: string;
};

type user_update_city = {
    city: string;
};

type user_update_firstname = {
    firstname: string;
};

type user_update_lastname = {
    lastname: string;
};


declare module 'bcrypt' {
  export function hash(data: string, salt: number): string;
  // Declare other functions and types used by bcrypt
}

declare module 'jsonwebtoken' {
  export function sign(data: string, salt: number): string;
  // Declare other functions and types used by bcrypt
}


// declare module '@editorjs/checklist' {
//     export default class Checklist {
//         constructor({data: {items}}: {data: {items: any[]}})
//         render(): HTMLElement;
//         save(): {items: any[]};
//     }
// }

// declare module '@editorjs/code' {
//     export default class Code {
//         constructor({data: {code}}: {data: {code: string}})
//         render(): HTMLElement;
//         save(): {code: string};
//     }
// }

// declare module '@editorjs/delimiter' {
//     export default class Delimiter {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/embed' {
//     export default class Embed {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/image' {
//     export default class Image {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/inline-code' {
//     export default class InlineCode {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/link' {
//     export default class Link {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/list' {
//     export default class List {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/quote' {
//     export default class Quote {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/simple-image' {
//     export default class SimpleImage {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/paragraph' {
//     export default class Paragraph {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/header' {
//     export default class Header {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/warning' {
//     export default class Warning {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/marker' {
//     export default class Marker {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/raw' {
//     export default class Raw {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/table' {
//     export default class Table {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/quote' {
//     export default class Quote {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/underline' {
//     export default class Underline {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }

// declare module '@editorjs/attaches' {
//     export default class Attaches {
//         constructor({data: {}})
//         render(): HTMLElement;
//         save(): {};
//     }
// }



// "firstname": "sabbir",
// "lastname": "ahmmed",
// "email": "ahsabbir103@gmail.com"



// type CredentialsProvider = {
//     getCredentials(): Promise<{
//       username: string;
//       password: string;
//     }>;
//   };
