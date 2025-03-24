/* eslint-disable */
declare global {
    var age: number;
    var testContext: Record<string, unknown>;
}

export function initGlobal(): void {
    globalThis.age = 18;
    globalThis.testContext = {};
<<<<<<< HEAD
}
=======
}
>>>>>>> 0ea5e842788f5ef527a61981b2e961958b22444e
