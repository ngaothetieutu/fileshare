//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Presentation_.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class SectorMasks
    {
        public int ID { get; set; }
        public string MASK { get; set; }
        public int SectorID { get; set; }
    
        public virtual Sectors Sectors { get; set; }
    }
}
