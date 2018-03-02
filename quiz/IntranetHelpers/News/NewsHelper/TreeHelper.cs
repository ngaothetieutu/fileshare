﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Intranet.Models.NewsModel
{
    internal static class GenericHelpers
    {
        public static IEnumerable<TreeItem<T>> GenerateTree<T, K>(
            this IEnumerable<T> collection,
            Func<T, K> id_selector,
            Func<T, K> parent_id_selector,
            K root_id = default(K))
        {
            foreach (var c in collection.Where(c => parent_id_selector(c).Equals(root_id)))
            {
                yield return new TreeItem<T>
                {
                    Item = c,
                    Children = collection.GenerateTree(id_selector, parent_id_selector, id_selector(c)).ToList()
                };
            }
        }
    }
    public class TreeItem<T>
    {
        public T Item { get; set; }
        public List<TreeItem<T>> Children { get; set; }
    }

}