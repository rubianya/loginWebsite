import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance.html',
  styleUrl: './finance.css',
})
export class Finance {

  customers = [
    {
      name: 'John Smith',
      address: 'Bangkok, Thailand',
      telephone: '081-234-5678',
      deposit: 50000
    },
    {
      name: 'Emma Johnson',
      address: 'Chiang Mai, Thailand',
      telephone: '082-345-6789',
      deposit: 75000
    },
    {
      name: 'Michael Brown',
      address: 'Phuket, Thailand',
      telephone: '083-456-7890',
      deposit: 120000
    },
    {
      name: 'Sophia Davis',
      address: 'Khon Kaen, Thailand',
      telephone: '084-567-8901',
      deposit: 30000
    },
    {
      name: 'Daniel Wilson',
      address: 'Pattaya, Thailand',
      telephone: '085-678-9012',
      deposit: 95000
    },
    {
      name: 'Olivia Taylor',
      address: 'Hat Yai, Thailand',
      telephone: '086-789-0123',
      deposit: 67000
    },
    {
      name: 'James Anderson',
      address: 'Udon Thani, Thailand',
      telephone: '087-890-1234',
      deposit: 88000
    },
    {
      name: 'Mia Thomas',
      address: 'Nakhon Ratchasima, Thailand',
      telephone: '088-901-2345',
      deposit: 43000
    },
    {
      name: 'William Martinez',
      address: 'Rayong, Thailand',
      telephone: '089-012-3456',
      deposit: 150000
    },
    {
      name: 'Charlotte White',
      address: 'Ayutthaya, Thailand',
      telephone: '080-123-4567',
      deposit: 61000
    }
  ];

}
