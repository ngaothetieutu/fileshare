//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using Presentation_.Models;

namespace Presentation_.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class FD_ACQ_M : IDates
    {
        public int ID { get; set; }
        public System.DateTime DT_REG { get; set; }
        public string pay_sys { get; set; }
        public string ISSUER_TYPE { get; set; }
        public string ACQUIRE_BANK { get; set; }
        public string TYPE_TRANSACTION { get; set; }
        public string MERCHANT { get; set; }
        public Nullable<double> FEE { get; set; }
        public Nullable<double> AMT { get; set; }
        public Nullable<int> CNT { get; set; }
    }
}
