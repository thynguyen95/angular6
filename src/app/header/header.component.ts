import { Component, OnInit } from '@angular/core';

@Component({
  //tên thẻ
  selector: 'app-header',
  //đường dẫn chứa đến file chứa nội dung html
  templateUrl: './header.component.html',
  // đường dẫn đến file chứa css (lưu ý: css chỉ áp dụng cho html của component này)
  styleUrls: ['./header.component.scss']
})

//thành phần ts của thẻ (code javascript cho thẻ này)
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
