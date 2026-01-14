"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StudentDto {
    id;
    created_at;
    name;
    address;
}
exports.StudentDto = StudentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 101, description: 'Primary key' }),
    __metadata("design:type", Number)
], StudentDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-14T09:24:10.534878+00:00' }),
    __metadata("design:type", String)
], StudentDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'satheesh' }),
    __metadata("design:type", String)
], StudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hyderabad' }),
    __metadata("design:type", String)
], StudentDto.prototype, "address", void 0);
//# sourceMappingURL=student.dto.js.map