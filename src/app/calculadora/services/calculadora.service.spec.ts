import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 10 + 40 = 50',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(10, 40, CalculadoraService.SOMA);
      expect(soma).toEqual(50);
    })
  );

  it('Deve garantir que 40 - 10 = 30',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtrair = service.calcular(40, 10, CalculadoraService.SUBTRACAO);
      expect(subtrair).toEqual(30);
    })
  );

  it('Deve garantir que 1 / 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(10, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(5);
    })
  );

  it('Deve garantir que 10 * 4 = 40',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(10, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(40);
    })
  );

  it('Deve retornar 0 para operação inválida',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let operacaoInvalida = service.calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  })
);
});
