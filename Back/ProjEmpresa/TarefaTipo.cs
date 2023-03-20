using System.ComponentModel.DataAnnotations;

namespace ProjEmpresa
{
    public class TarefaTipo
    {
        public int id { get; set; }
        [StringLength(50)]
        public string TarefaNome { get; set; } = string.Empty;
       
    }
}
