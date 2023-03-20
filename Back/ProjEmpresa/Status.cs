﻿using System.ComponentModel.DataAnnotations;

namespace ProjEmpresa
{
    public class Status
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string StatusOpcao { get; set; } = string.Empty;
    }
}
