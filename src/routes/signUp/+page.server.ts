
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    signup: async ({ request }) => {
        const data = await request.formData();
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        const password = data.get('password');
        // Add your sign-up logic here (e.g., save to database)
        console.log('Sign Up:', { firstName, lastName, email, password });
        // On success, redirect to dashboard
        throw redirect(302, '/dashboard');
    },
    login: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        // Add your login logic here (e.g., verify credentials)
        console.log('Login:', { email, password });
        // On success, redirect to dashboard
        throw redirect(302, '/dashboard');
    }
};