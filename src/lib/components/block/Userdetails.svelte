<script>
    import Facebook from '$lib/components/assets/facebbook.svg'
    import Google from '$lib/components/assets/google.svg'
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    let firstName = '';
    let lastName = '';
    let email = '';
  
    function handleSignUp() {
      // Handle sign-up logic here (e.g., API call)
      console.log('Sign Up:', { firstName, lastName, email });
    }
</script>

 
<div class="w-[25vw] bg-white shadow-lg mx-auto">


<Tabs.Root value="account" class="">
    <Tabs.List class=" mt-[3rem] mx-[1.7rem]">
      <Tabs.Trigger value="sign">Sign Up</Tabs.Trigger>
      <Tabs.Trigger value="login">Login</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="sign">
        <main class="flex-grow flex items-center justify-center  p-4">
            <!-- Sign-Up Form -->
            <div class="bg-white p-6 rounded-lg w-full max-w-md md:max-w-md">
              <!-- Tabs -->
              <div class="flex border-b">
                <button class="flex-1 py-2 text-center bg-orange-400 text-white">Sign Up</button>
                <a href="#" class="flex-1 py-2 text-center text-gray-600 bg-gray-200">Log In</a>
              </div>
        
              <!-- Social Sign-Up Buttons -->
              <div class="mt-4 space-y-5">
                <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
                  <img src={Facebook} alt="Facebook" class="w-5 h-5 mr-2" />
                  Sign Up with Facebook
                </button>
                <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
                  <img src={Google} alt="Google" class="w-5 h-5 mr-2" />
                  Sign Up with Google
                </button>
              </div>
        
              <!-- Divider -->
              <div class="my-4 text-center text-gray-500">OR</div>
        
              <!-- Manual Sign-Up Form -->
              <form on:submit|preventDefault={handleSignUp} class="space-y-4">
                <div class="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First name"
                    bind:value={firstName}
                    class="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    bind:value={lastName}
                    class="w-full p-2 border rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  bind:value={email}
                  class="w-full p-2 border rounded-lg"
                />
                <button type="submit" class="w-full py-2 bg-orange-200 text-white rounded-lg hover:bg-orange-300">
                  Continue
                </button>
              </form>
        
              <!-- Log In Link -->
              <p class="mt-4 text-center text-sm text-gray-600">
                Already have an account on Travel Buddy? <a href="/login" class="text-orange-400 hover:underline">Log In</a>
              </p>
            </div>
          </main>
    </Tabs.Content>
    <Tabs.Content value="login">
        <main class="flex-grow flex items-center justify-center p-4">
            <!-- Sign-Up Form -->
            <div class="bg-white p-6 rounded-lg w-full max-w-md md:max-w-md">
                
              <!-- Manual Sign-Up Form -->
              <form on:submit|preventDefault={handleSignUp} class="space-y-4">
                <div class="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First name"
                    bind:value={firstName}
                    class="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    bind:value={lastName}
                    class="w-full p-2 border rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  bind:value={email}
                  class="w-full p-2 border rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full p-2 border rounded-lg"
                />
                <button type="submit" class="w-full py-2 bg-orange-200 text-white rounded-lg hover:bg-orange-300">
                  Continue
                </button>
              </form>
        
              <!-- Log In Link -->
              <p class="mt-4 text-center text-sm text-gray-600">
                Already have an account on Travel Buddy? <a href="/login" class="text-orange-400 hover:underline">Log In</a>
              </p>
            </div>
          </main>
    </Tabs.Content>
  </Tabs.Root>
 <!-- Main Content -->
</div>