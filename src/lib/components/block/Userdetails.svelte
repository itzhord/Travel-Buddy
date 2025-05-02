<!-- Userdetails.svelte -->
<script>
  import Facebook from '$lib/components/assets/facebbook.svg';
  import Google from '$lib/components/assets/google.svg';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<div class="w-[25vw] bg-white shadow-lg mx-auto rounded">
  <Tabs.Root value="sign" class="mt-">
      <Tabs.List class="mt-[2rem] mx-[1.7rem]">
          <Tabs.Trigger value="sign">Sign Up</Tabs.Trigger>
          <Tabs.Trigger value="login">Login</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="sign">
          <main class="flex-grow flex items-center justify-center p-4">
              <div class="bg-white p-6 rounded-lg w-full -mt-6 max-w-md md:max-w-md">
                  <div class="space-y-4">
                      <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
                          <img src={Facebook} alt="Facebook" class="w-5 h-5 mr-2" />
                          Sign Up with Facebook
                      </button>
                      <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
                          <img src={Google} alt="Google" class="w-5 h-5 mr-2" />
                          Sign Up with Google
                      </button>
                  </div>
                  <div class="my-2 text-center text-gray-500">OR</div>
                  <form method="POST" action="?/signup" class="space-y-4">
                      <div class="flex space-x-4">
                          <input type="text" name="firstName" placeholder="First name" class="w-full p-2 border focus:outline-none rounded-lg" />
                          <input type="text" name="lastName" placeholder="Last name" class="w-full p-2 border focus:outline-none rounded-lg" />
                      </div>
                      <input type="email" name="email" placeholder="Email address" class="w-full p-2 border focus:outline-none rounded-lg" />
                      <input type="password" name="password" placeholder="Password" class="w-full p-2 border focus:outline-none rounded-lg" />
                      <button type="submit" class="w-full py-2 bg-orange-200 text-white rounded-lg hover:bg-orange-300">
                          Continue
                      </button>
                  </form>
                  <p class="mt-4 text-center text-sm text-gray-600">
                      Already have an account on Travel Buddy?
                  </p>
              </div>
          </main>
      </Tabs.Content>
      <Tabs.Content value="login">
          <main class="flex-grow flex items-center justify-center p-4">
              <div class="bg-white p-6 rounded-lg w-full max-w-md md:max-w-md">
                  <form method="POST" action="?/login" class="space-y-4">
                      <input type="email" name="email" placeholder="Email address" class="w-full p-2 border focus:outline-none rounded-lg" />
                      <input type="password" name="password" placeholder="Password" class="w-full p-2 border focus:outline-none rounded-lg" />
                      <button type="submit" class="w-full py-2 bg-orange-200 text-white rounded-lg hover:bg-orange-300">
                          Login
                      </button>
                  </form>
                  <p class="mt-4 text-center text-sm text-gray-600">
                      Don't have an account?
                  </p>
              </div>
          </main>
      </Tabs.Content>
  </Tabs.Root>
</div>