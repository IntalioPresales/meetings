import { Component, OnInit, Inject, ViewChild, HostListener } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { MyHelperService } from 'src/app/services/my-helper.service';
import { ModalDirective, MdbTableDirective } from 'angular-bootstrap-md';
import Swal from 'sweetalert2';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  contactFormModalName = new FormControl('', [Validators.required]);
  contactFormModalEmail = new FormControl('', [Validators.email, Validators.required]);
  contactFormModalUsername = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
  // contactFormModalDOB = new FormControl('', Validators.required);

  users: any;
  selectedImage: string;
  selectedGender: string = "Male";
  dateOfBirth: any;
  imageOfUserToAdd: string;
  isLoading = false;
  searchText: string = '';

  @ViewChild('imageModal', { static: true }) imageModal: ModalDirective;
  @ViewChild('addUserModal', { static: true }) addUserModal: ModalDirective;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private myHelper: MyHelperService,
    private http: HttpClient
  ) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.load();
    this.users = this.myHelper.getUsersFromLocal();
  }

  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 1000 );
  }

  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.users[id][property] = editField;
    this.myHelper.updateAllUsersOnLocal(this.users);
  }

  remove(id: any) {
    // this.awaitingPersonList.push(this.personList[id]);
    Swal.fire({
      title: 'Delete ' + this.users[id].name + '?',
      text: 'You won\'t be able to revert this!',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#00796b',
      confirmButtonText: 'Yes, delete!',
      grow : false,
      // padding : 0,
    }).then((result) => {
      if (result.value) {
        //Check if user can be deleted
        // //console.log(this.myHelper.isUserInAnEvent(id))
        // if(this.myHelper.isUserInAnEvent(id)){
        //   Swal.fire('User is in an event')
        // }else{
        //   Swal.fire('Can delete. User is free!')
        // }

        //DELETE CODE
        this.users.splice(id, 1);
        this.storage.set('MyUsers', this.users);
        //console.log(this.users)
      }
    })
  }

  add() {
    if (
      !this.contactFormModalName.valid ||
      !this.contactFormModalEmail.valid ||
      !this.contactFormModalUsername.valid ||
      this.dateOfBirth === undefined ||
      this.dateOfBirth === '' ||
      this.selectedGender === undefined ||
      this.selectedGender === ''
    ) {
      let error: string = 'Something went wrong';
      if (!this.contactFormModalName.valid) { error = 'Name is required' }
      if (!this.contactFormModalEmail.valid) { error = 'Email is required' }
      if (!this.contactFormModalUsername.valid) { error = 'Username is required' }
      if (this.dateOfBirth === undefined || this.dateOfBirth === '') { error = 'Date of Birth is required' }
      if (this.selectedGender === undefined || this.selectedGender === '') { error = 'Gender is required' }
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: error,
        confirmButtonColor: '#00796b',
      })
    } else {
      //console.log('DOB', this.dateOfBirth);
      //console.log('Gender', this.selectedGender);
      //console.log('Name', this.contactFormModalName.valid);
      //console.log('Name', this.contactFormModalName.value);
      //console.log('Email', this.contactFormModalEmail.valid);
      //console.log('Email', this.contactFormModalEmail.value);
      //console.log('Username', this.contactFormModalUsername.valid);
      //console.log('Username', this.contactFormModalUsername.value);
      let email = this.contactFormModalEmail.value;
      let username = this.contactFormModalUsername.value;
      let fullName = this.contactFormModalName.value;
      let userId = this.myHelper.getRandomUserId();

      let userToSave = {
        id: userId,
        name: fullName,
        username: username,
        email_address: email,
        image: this.imageOfUserToAdd,
        dob: this.dateOfBirth,
        gender: this.selectedGender
      }
      //console.log(userToSave);
      this.myHelper.saveUserToLocal(userToSave);
      // this.users = this.myHelper.getUsersFromLocal();

      this.contactFormModalName = new FormControl('', [Validators.required]);
      this.contactFormModalEmail = new FormControl('', [Validators.email, Validators.required]);
      this.contactFormModalUsername = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
      this.dateOfBirth = undefined;
      this.selectedGender = 'Male'
      this.addUserModal.hide();
    }
  }

  openAddUserModel() {
    let userToFill: any = [];
    this.http.get('https://randomuser.me/api/?inc=login,email,gender,name,picture,dob,id&noinfo&results=1&gender=male&nat=us')
      .subscribe((x: any) => {
        let result = x.results[0]
        //console.log(result)
        userToFill = {
          name: this.myHelper.titleCaseWord(result.name.first) + " " + this.myHelper.titleCaseWord(result.name.last),
          username: result.login.username,
          email_address: result.email,
          image: result.picture.large,
          dob: result.dob.date,
          gender: 'Male'
        }
        this.contactFormModalName = new FormControl(userToFill.name, [Validators.required]);
        this.contactFormModalEmail = new FormControl(userToFill.email_address, [Validators.email, Validators.required]);
        this.contactFormModalUsername = new FormControl(userToFill.username, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
        this.dateOfBirth = userToFill.dob;
        this.selectedGender = 'Male'
        this.imageOfUserToAdd = userToFill.image;
      },
        error => {
          //console.log("getRandomUser:ERROR", error);
        }
      );
    this.addUserModal.show();

  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.imageModal.show();
  }

  onGenderChange(value) {
    this.selectedGender = value;
    let userToFill: any = [];
    this.http.get('https://randomuser.me/api/?inc=login,email,gender,name,picture,dob,id&noinfo&results=1&gender=' + this.selectedGender.toLocaleLowerCase() + '&nat=us')
      .subscribe((x: any) => {
        let result = x.results[0]
        //console.log(result)
        userToFill = {
          name: this.myHelper.titleCaseWord(result.name.first) + " " + this.myHelper.titleCaseWord(result.name.last),
          username: result.login.username,
          email_address: result.email,
          image: result.picture.large,
          dob: result.dob.date,
        }
        this.contactFormModalName = new FormControl(userToFill.name, [Validators.required]);
        this.contactFormModalEmail = new FormControl(userToFill.email_address, [Validators.email, Validators.required]);
        this.contactFormModalUsername = new FormControl(userToFill.username, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
        this.dateOfBirth = userToFill.dob;
        this.imageOfUserToAdd = userToFill.image;
      },
        error => {
          //console.log("getRandomUser:ERROR", error);
        }
      );
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.users = this.myHelper.getUsersFromLocal();
      // this.mdbTable.setDataSource(this.users);
    }

    if (this.searchText) {
      this.users = this.myHelper.getUsersFromLocal();
      let usersToReturn=[];
      this.users.forEach(user => {
        if(
          user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.email_address.toLowerCase().includes(this.searchText.toLowerCase()) ||
          // user.dob.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.gender.includes(this.searchText)
        ){
          usersToReturn.push(user);
        }
      });
      this.users=usersToReturn;
    }
  }
}
