import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule],
  templateUrl: './shared-table.html',
  styleUrls: ['./shared-table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedTableComponent<T extends { id: number | string }> {
  @Input() displayedColumns: string[] = [];
  @Input() data: T[] = [];
  @Input() totalResults = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 0;
  @Input() loading = false;

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() rowClick = new EventEmitter<T>();   // 👈 nuevo evento

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }

  trackById = (_: number, item: T) => item.id;
}
