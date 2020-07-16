import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SubmitResultService } from "src/app/core/submit-result/submit-result.service";
import { Router } from "@angular/router";
import { AdminNewCompanyService } from "./admin-new-company.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-admin-new-company",
  templateUrl: "./admin-new-company.component.html",
  styleUrls: ["./admin-new-company.component.css"],
})
export class AdminNewCompanyComponent implements OnInit {
  companyForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(
    public fb: FormBuilder,
    private adminNewCompanyService: AdminNewCompanyService,
    private submitResultService: SubmitResultService,
    private router: Router
  ) {}

  ngOnInit() {
    this.companyForm = this.fb.group({
      name: [null, Validators.required],
    });
  }

  async submitForm(companyForm: any) {
    this.submitted = true;
    if (this.companyForm.valid) {
      this.showMessage = true;
      console.log(companyForm);
      await this.adminNewCompanyService.postCompany(companyForm).subscribe(
        () => {
          this.submitResultService.setResultSubmitResultText(
            "Empresa inserida com sucesso!",
            "Essa nova empresa está disponível para agendamentos!"
          );
          this.submitResultService.setResultOkButton(
            "Retornar para painel do administrador",
            "/admin"
          );
          this.router.navigate(["admin/empresas/novo/resposta"]);
        },
        () => {
          this.submitResultService.setResultSubmitResultText(
            "Erro",
            "O sistema não foi capaz de criar nova empresa"
          );
          this.router.navigate(["admin/empresas/novo/resposta"]);
        }
      );
    } else {
      setTimeout(() => {
        const errorHeading: HTMLElement = document.querySelector(
          "#error-heading"
        );
        errorHeading.focus();
      }, environment.validationErrorTimeout);
    }
  }
}
