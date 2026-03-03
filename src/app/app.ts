import { Component, OnInit, signal } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    const dados = [
      { categoria: 'Eletronicos', valor: 10 },
      { categoria: 'Roupas', valor: 50 },
      { categoria: 'Decoração', valor: 5 },
      { categoria: 'Ferramentas', valor: 15 },
      { categoria: 'Acessórios', valor: 20 },
      { categoria: 'Beleza', valor: 30 },
    ];

    const labels = dados.map(v => v.categoria);
const valores = dados.map(v => v.valor);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Categorias Mais Vendidas',
            data: valores,
            backgroundColor: 'rgba(25, 90, 168, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        scales:{
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
