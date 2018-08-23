import {
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login-v2";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
    /*    {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        }, */
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("389562592993-pjpjd39begd1tvvtvvf1tsc366pcv8t7.apps.googleusercontent.com")
        }
      ];
  );
  return config;
}