import { Component, OnInit,OnDestroy,ElementRef, ViewChild  } from '@angular/core';
import { faCheck,faChain,faCheckCircle,faDotCircle,faRulerHorizontal,faListDots} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { interval,Subscription } from 'rxjs';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy{
  step1Achieved: any = false;
  step2Achieved: any = false;
  step3Achieved: any = false;

  check=faCheck
   listDot=faListDots;
   logedUserId=JSON.parse(localStorage.getItem("logedUser")).id
   constructor(private userService:UserService){}

   @ViewChild('contentToCapture') contentToCapture: ElementRef;
 
user:any=null

momoPaymentResponse:any={}


pollingSubsription:Subscription

  ngOnInit(): void {
  this.startPolling();
  
 
  }
   
  ngOnDestroy(): void {
    if(this.pollingSubsription){
      this.pollingSubsription.unsubscribe()
    }
  }
  

  startPolling():void{
    this.pollingSubsription=interval(1000)
    .subscribe(()=>{
      this.getLogedUser(this.logedUserId)
    })
  }

  getLogedUser(logedUserId): void {
    this.userService.getLogedUser(logedUserId).subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
          this.momoPaymentResponse = user.momoPaymentResponse ? JSON.parse(user.momoPaymentResponse) : null;
          if (this.momoPaymentResponse && this.momoPaymentResponse.data) {
            console.log("user whose data to render", this.momoPaymentResponse.data.status);
          }
          this.step1Achieved = user.momoPaymentResponse;
          this.step2Achieved = user.adminApproval;
          this.step3Achieved = user.managerApproval;
        }
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }
  downloadPageAsPDF(): void {
   
    const invoiceContent = this.generateInvoiceContent();

 
    const blob = new Blob([invoiceContent], { type: 'text/html' });

  
    html2pdf().from(invoiceContent).toPdf().save('invoice.pdf');
  }

  generateInvoiceContent(): string {
  
    const invoiceContent = `
      <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="flex flex-col justify-center items-center rounded-xl shadow-xl w-1/2 p-8">
          <div>
            Payment invoice
          </div>
      
          <div class=" px-5">
            <div>First Name: ${this.user.firstName}</div>
            <div>Last Name: ${this.user.lastName}</div>
            <!-- Add other user details -->
      
            <h1 class="text-2xl font-bold text-center mb-8 underline">Payment details</h1>
            <div class="p-5 shadow-lg bg-gray mb-5">
              <table class="w-full mb-8">
                <tr>
                  <th class="text-left py-2">Transaction ID:</th>
                  <td class="py-2">${this.momoPaymentResponse?.data?.status?.financialTransactionId}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Reference ID:</th>
                  <td class="py-2">${this.momoPaymentResponse?.data?.response?.referenceId}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Amount:</th>
                  <td class="py-2">${this.momoPaymentResponse?.data?.status?.amount}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Payer:</th>
                  <td class="py-2">MSISDN: ${this.momoPaymentResponse?.data?.status?.financialTransactionId}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Payer Message:</th>
                  <td class="py-2">${this.momoPaymentResponse?.data?.status?.payerMessage}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Payee Note:</th>
                  <td class="py-2">${this.momoPaymentResponse?.data?.status?.payeeNote}</td>
                </tr>
                <tr>
                  <th class="text-left py-2">Status:</th>
                  <td class="py-2 text-green-600">${this.momoPaymentResponse?.data?.status?.status}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    return invoiceContent;
  }
  
  

  downloadPage(): void {
    
    html2canvas(this.contentToCapture.nativeElement).then(canvas => {
     
      html2pdf().from(canvas).save('page.pdf');
    });
  }
}
