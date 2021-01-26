import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-in-room-app',
  templateUrl: './in-room-app.component.html',
  styleUrls: ['./in-room-app.component.css']
})
export class InRoomAppComponent implements OnInit {

  inputValue: string;
  showHome: boolean = true;
  showSupport: boolean;
  showServices: boolean;
  showCleaning: boolean;
  showBeverage: boolean;
  public innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    //console.log(this.innerWidth)
  }

  goHome() {
    this.showHome = true;
    this.showSupport = false;
    this.showServices = false;
    this.showCleaning = false;
    this.showBeverage = false;
  }

  goSupport() {
    this.showHome = false;
    this.showSupport = true;
    this.showServices = false;
    this.showCleaning = false;
    this.showBeverage = false;
  }

  goServices() {
    // this.showHome = false;
    // this.showSupport = false;
    // this.showServices = true;
    // this.showCleaning = false;
    // this.showBeverage = false;
    Swal.fire(
      'A Services representative is on his way to your room.',
      null,
      'success'
    )
  }

  goCleaning() {
    // this.showHome = false;
    // this.showSupport = false;
    // this.showServices = false;
    // this.showCleaning = true;
    // this.showBeverage = false;
    Swal.fire(
      'A Cleaner is on his way to your room.',
      null,
      'success'
    )
  }

  goBeverage() {
    // this.showHome = false;
    // this.showSupport = false;
    // this.showServices = false;
    // this.showCleaning = false;
    // this.showBeverage = true;
    Swal.fire(
      'A Barista is on his way to your room.',
      null,
      'success'
    )
  }

  goMessage() {
    Swal.fire({
      title: 'Enter your message below',
      input: 'text',
      inputValue: this.inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Received!',
          'Your message is well recieved.',
          'success'
        )
      }
    });
  }

  goEmergency() {
    let timerInterval
    let imageSource:string="";
    if(environment.production){
      imageSource="~/assets/img/emergency_exit.png";
    }else{
      imageSource="../../../assets/img/emergency_exit.png";
    }
    Swal.fire({
      title: '<h3>Someone will arrive in <strong>60</strong> seconds.</h3>',
      html: `
      <span style="color: red;">In case of fire, please follow the below procedure.</span>
      <br/>
      <img src="${imageSource}" class="img-fluid" alt="Responsive image">
      `,
      timer: 60000,
      onBeforeOpen: () => {
        // Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getTitle().querySelector('strong')
            .textContent = '' + Math.round(Swal.getTimerLeft() / 1000)
        }, 1000)
      },
      onClose: () => {
        clearInterval(timerInterval)
      },
      confirmButtonText: 'Cancel',
      confirmButtonColor: '#00796b',
      width: '50%'
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        //console.log('I was closed by the timer')
      }
    })
  }

  async missingCables() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        `
        <p>
        <label><input id="swal-input1" type="checkbox" value="HDMI" /> HDMI</label>
        <label><input id="swal-input2" type="checkbox" value="VGA" /> VGA</label>
        <label><input id="swal-input3" type="checkbox" value="Ethernet" /> Ethernet</label>
        <label><input id="swal-input4" type="checkbox" value="3.5mm Audio" /> 3.5mm Audio</label>
        <label><input id="swal-input5" type="checkbox" value="USB" /> USB</label>
        <label><input id="swal-input6" type="checkbox" value="Adapter" /> Adapter</label>
        </p>
        `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        return [
          // document.getElementById('swal-input1').nodeValue,
          $('#swal-input1:checked').val(),
          $('#swal-input2:checked').val(),
          $('#swal-input3:checked').val(),
          $('#swal-input4:checked').val(),
          $('#swal-input5:checked').val(),
          $('#swal-input6:checked').val(),
        ]
      }
    })

    if (formValues) {
      let missingCables: string = "We are getting you: ";
      formValues.forEach((value, index) => {
        if (value != null) {
          missingCables = missingCables + " " + value
          if (index !== formValues.length - 1) {
            missingCables = missingCables + ","
          } else {
            missingCables = missingCables + "."
          }
        }
      });
      Swal.fire("Well Recieved", missingCables, 'success')
    }
  }

  connectionProblems() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Connection',
        text: 'Can you connect to the network?'
      },
      {
        title: 'Speed',
        text: 'Is there any problems in connection speed?'
      },
      {
        title: 'More Information',
        text: 'Please explain the problem in details'
      }
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html: '<span>We are working on it, someone might visit you if needed.</span>',
          confirmButtonText: 'Okay!'
        })
      }
    })
  }

  talkToAnExpert() {
    Swal.fire(
      'Well Recieved!',
      'An expert will be at your service soon',
      'success'
    )
  }

  missingHardware() {
    let hardware: string;
    Swal.fire({
      title: 'Please enter the name of the missing Hardware',
      input: 'text',
      inputValue: this.inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Nothing missing?'
        } else {
          hardware = value;
        }
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Getting It!',
          hardware + ' is being delivered to you soon',
          'success'
        )
      }
    });
  }

  printingProblems() {
    Swal.fire(
      'Hold On',
      'An expert with the needed tools will be at your service soon to fix printing issues',
      'success'
    )
  }

  shareYourErrorMessage() {
    Swal.fire({
      title: 'Enter the error you are seeing below',
      input: 'text',
      inputValue: this.inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'No errors?'
        }
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Well Recieved!',
          'An expert will be at your service soon',
          'success'
        )
      }
    });
  }
}
