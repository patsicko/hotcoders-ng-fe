import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemplatesModule } from '../templates/templates.module';
import { AtomsModule } from "../atoms/atoms.module";
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { QuillModule } from 'ngx-quill'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentService } from 'src/app/services/payment.service';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';
import { MatInputModule } from '@angular/material/input';
import { StripePaymentElementComponent } from 'ngx-stripe';
import { UserPageComponent } from './user-page/user-page.component';





@NgModule({
    declarations: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent,
        LoginPageComponent,
        AdminDashboardComponent,
        PaymentPageComponent,
        StripeCheckoutComponent,
        UserPageComponent
    ],
    exports: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent,
        LoginPageComponent,
        AdminDashboardComponent,
        PaymentPageComponent
    ],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('63754100136-r3ga1asjit8hr55jl4edb18apeu1nr0s.apps.googleusercontent.com'),
            },
          ],
        } as SocialAuthServiceConfig,
      },
      PaymentService
    ],
    imports: [
        CommonModule,
        MoleculesModule,
        TemplatesModule,
        AtomsModule,
        ReactiveFormsModule,
        SocialLoginModule,
        QuillModule,
        FontAwesomeModule,
        OrganismsModule,
       MatInputModule,
      StripePaymentElementComponent
       
    ]
})
export class PagesModule { }
